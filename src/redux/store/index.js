import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Firebase
import {
	createFirestoreInstance,
	getFirestore,
	reduxFirestore,
} from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import rootReducer from '../reducers';

const middlewares = [ thunk.withExtraArgument({ getFirestore }) ];

// Firebase config
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
};

const rfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
}; // optional redux-firestore Config Options

// Initialize Firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
firebase.firestore();

// Create store with reducers and initial state
const store = createStore(
	rootReducer,
	compose(reduxFirestore(firebase, rfConfig), applyMiddleware(...middlewares))
);

const rfProps = {
	firebase,
	config: rfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

export default store;
export { store, rfProps };
