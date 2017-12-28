import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(createSagaMiddleware),
  devTools
)

const store = createStore(reducer, enhancer)

export default store