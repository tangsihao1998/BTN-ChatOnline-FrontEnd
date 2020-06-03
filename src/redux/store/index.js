import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [ thunk ];

// Create store with reducers and initial state
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
export { store };
