import { combineReducers } from 'redux';
// initialState
import initialState from './../initialState';

// Import Reducers
import authReducer from './AuthReducer';
import chatReducer from './ChatReducer';
// export State
export default function(services) {
	return combineReducers({
		auth: authReducer(initialState.auth),
		chat: chatReducer(initialState.chat),
		user: services.users.reducer,
		messages: services.messages.reducer,
		rooms: services.rooms.reducer,
		authentication: services.authentication.reducer,
	});
}
