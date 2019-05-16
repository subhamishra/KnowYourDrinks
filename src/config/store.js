// @flow

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import drinkData from '../reducers/Drink';
import drinkSaga from '../sagas/drink';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default store = createStore(
  drinkData,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(drinkSaga);
