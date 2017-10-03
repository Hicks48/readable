import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const initializeStore = () => createStore(reducer, applyMiddleware(thunk))

export default initializeStore