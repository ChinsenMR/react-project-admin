import { createStore, compose } from 'redux';
import reducer from './../reducers';
// window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const composeEnhancers =  compose;
const store = createStore(reducer, composeEnhancers());

export default store;