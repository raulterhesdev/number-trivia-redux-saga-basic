import {
	LOGIN_FAIL,
	LOGIN_START,
	LOGIN_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	REGISTER_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from '../actions/actionTypes';
const initialState = {
	isLoggedIn: false,
	authError: null,
	user: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				authError: null,
				user: payload,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				authError: payload,
				user: null,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
				authError: null,
				user: null,
			};
		case LOGOUT_FAIL:
			return {
				...state,
				authError: payload,
			};
		default:
			return state;
	}
};
