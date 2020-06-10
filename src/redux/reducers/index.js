import { combineReducers } from 'redux';
// initialState
import initialState from './../initialState';

// Import Reducers
import authReducer from './AuthReducer';

// export State
export default function(services) {
	return combineReducers({
		auth: authReducer(initialState.auth),
		user: services.users.reducer,
		messages: services.messages.reducer,
		rooms: services.rooms.reducer,
	});
} 
