import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAtkq6eISEeD5EmvIVqGE3PTeLLPvt1hy4',
	authDomain: 'redux-saga-learning-2f466.firebaseapp.com',
	databaseURL: 'https://redux-saga-learning-2f466.firebaseio.com',
	projectId: 'redux-saga-learning-2f466',
	storageBucket: 'redux-saga-learning-2f466.appspot.com',
	messagingSenderId: '1004089938686',
	appId: '1:1004089938686:web:c668965ce71da739428baf',
};

firebase.initializeApp(firebaseConfig);

export const registerUser = ({ email, password }) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => Promise.reject(error));
};

export const loginUser = ({ email, password }) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => Promise.reject(error));
};

export const logoutUser = () => {
	return firebase
		.auth()
		.signOut()
		.then(function () {
			// Sign-out successful.
		})
		.catch((error) => Promise.reject(error));
};
