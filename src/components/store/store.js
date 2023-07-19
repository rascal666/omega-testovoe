import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeFun = process.env.NODE_ENV === 'development'? composeWithDevTools: compose
const composeEnhancers = composeFun(applyMiddleware(thunk))

const initialState = {}

const store = createStore(rootReducer, initialState, composeEnhancers)

export default store