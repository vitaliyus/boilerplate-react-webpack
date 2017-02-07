/**
 * Created by vitaliy on 30.12.16.
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers';
import mainSaga from './sagas';

export default function () {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware, thunk));

  sagaMiddleware.run(mainSaga);
  return store;
}
