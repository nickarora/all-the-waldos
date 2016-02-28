import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { match, RouterContext } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import thunk from 'redux-thunk';

import reducers from '../src/reducers';
import routes from './routes';

//  import css from '../style/main.scss';
const css = '';

import mongoose from 'mongoose';
import dbConnection from './db_connection';

mongoose.connect(dbConnection);

export const handleRender = (req, res) => {
  const initialState = {};
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
      let html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      html = '';

      res.render('index',
        { styles: css, html, initialState: JSON.stringify(store.getState()) });
    } else {
      res.status(404).render('error');
    }
  });
};
