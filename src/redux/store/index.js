import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {services} from './../../feathers';

import rootReducer from '../reducers';

const middlewares = [ thunk, reduxPromiseMiddleware ];

// Create store with reducers and initial state
const store = createStore(rootReducer(services), applyMiddleware(...middlewares));

export default store;
export { store };
