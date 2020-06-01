import { combineReducers } from 'redux';

// Import Reducers
import authReducer from './AuthReducer';

// export State
export default combineReducers({
	auth: authReducer,
});
