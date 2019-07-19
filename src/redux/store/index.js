import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const initialState = {}
const store =  createStore(rootReducer,initialState,applyMiddleware(logger));

export default store
