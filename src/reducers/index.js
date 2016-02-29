import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import currentMap from './currentMap';

const rootReducer = combineReducers({
  currentMap,
  routing: routeReducer
});

export default rootReducer;
