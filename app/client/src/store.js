import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(...middlewares));