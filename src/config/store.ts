import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../features/root-saga'
import rootReducer from '../features/root-reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
