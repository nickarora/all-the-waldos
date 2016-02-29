import { match } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import thunk from 'redux-thunk';

import reducers from '../src/reducers';
import routes from './routes';

import mongoose from 'mongoose';
import dbConnection from './db_connection';

mongoose.connect(dbConnection);

import * as waldoService from './api/service/waldoService';

export const handleRender = (req, res) => {
  waldoService.getDefaultMap((err, mapResponse) => {
    if (err) throw err;

    const initialState = { currentMap: mapResponse };
    const history = createMemoryHistory(req.path);
    const simpleRouter = syncHistory(history);
    const finalCreateStore = applyMiddleware(thunk, simpleRouter)(createStore);

    const store = finalCreateStore(reducers, initialState);

    simpleRouter.listenForReplays(store);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        res.render('index', { initialState: JSON.stringify(store.getState()) });
      } else {
        res.status(404).render('error');
      }
    });
  });
};
