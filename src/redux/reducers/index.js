import { combineReducers } from 'redux';
// initialState
import initialState from './../initialState';

// Import Reducers
import authReducer from './AuthReducer';

// export State
export default combineReducers({
  auth: authReducer(initialState.auth),
});