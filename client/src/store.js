import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const enhancers = compose(
  applyMiddleware(thunk),
  windo.devToolsExtension && window.devToolsExtension
)

const store = createStore(rootReducer, {}, enhancers)

export default store