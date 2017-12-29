import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

const reducer = combineReducers(reducers)
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f
const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  devTools
)

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export const action = (type, payload = []) => store.dispatch({type, payload})

export default store