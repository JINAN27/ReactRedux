import { combineReducers, compose, createStore } from 'redux';
import counterReducer from "./features/reducers";

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window._REDUX_DEVTOOL_EXTENTION_COMPOSE_|| compose;
let store = createStore(rootReducer, composeEnhancers());

export default store;

