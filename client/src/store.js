import { createStore } from 'redux'
import rootReducer from './reducers/index'

const enhancers = compose(
  
)

const store = createStore(rootReducer, {}, enhancers)

export default store