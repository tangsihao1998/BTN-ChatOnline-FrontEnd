import { combineReducers } from 'redux';

// Import Reducers
import authReducer from './AuthReducer';
import chatReducer from './ChatReducer';
import { firestoreReducer } from 'redux-firestore';

// export State
export default combineReducers({
	auth: authReducer,
	chat: chatReducer,
	firestore: firestoreReducer,
});
