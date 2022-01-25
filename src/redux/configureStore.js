import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import missionsReducer from './missions/missions';
import Rocketreducers from './rockets/rockets';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer;
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
