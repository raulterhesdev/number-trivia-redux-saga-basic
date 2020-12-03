import {
	LOGIN_FAIL,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGOUT_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_START,
	REGISTER_SUCCESS,
} from './actionTypes';

export const loginStart = (payload) => ({
	type: LOGIN_START,
	payload,
});

export const loginSuccess = (payload) => ({
	type: LOGIN_SUCCESS,
	payload,
});

export const loginFail = (payload) => ({
	type: LOGIN_FAIL,
	payload,
});

export const registerStart = (payload) => ({
	type: REGISTER_START,
	payload,
});

export const registerSuccess = (payload) => ({
	type: REGISTER_SUCCESS,
	payload,
});

export const registerFail = (payload) => ({
	type: REGISTER_FAIL,
	payload,
});

export const logoutStart = () => ({
	type: LOGOUT_START,
});

export const logoutFail = () => ({
	type: LOGOUT_FAIL,
});

export const logoutSuccess = () => ({
	type: LOGOUT_SUCCESS,
});
