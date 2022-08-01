import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  let store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);

  return store;
}
