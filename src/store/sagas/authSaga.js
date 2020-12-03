import {
	all,
	call,
	put,
	takeEvery,
	takeLatest,
	takeLeading,
} from 'redux-saga/effects';
import {
	REGISTER_START,
	LOGIN_START,
	LOGOUT_START,
} from '../actions/actionTypes';
import { registerUser, loginUser, logoutUser } from '../../utils/firebase';
import {
	loginFail,
	loginSuccess,
	registerFail,
	registerSuccess,
	logoutFail,
	logoutSuccess,
} from '../actions';

export function* registerUserSaga(action) {
	try {
		const user = yield call(registerUser, action.payload);
		yield put(registerSuccess(user));
	} catch (error) {
		yield put(registerFail(error.message));
	}
}

export function* watchRegisterUser() {
	yield takeEvery(REGISTER_START, registerUserSaga);
}

export function* loginUserSaga(action) {
	try {
		const user = yield call(loginUser, action.payload);
		yield put(loginSuccess(user));
	} catch (error) {
		yield put(loginFail(error.message));
	}
}

export function* watchLoginUser() {
	yield takeLatest(LOGIN_START, loginUserSaga);
}

export function* logoutUserSaga(action) {
	try {
		yield call(logoutUser);
		yield put(logoutSuccess());
	} catch (error) {
		yield put(logoutFail(error.message));
	}
}

export function* watchLogoutUser() {
	yield takeLeading(LOGOUT_START, logoutUserSaga);
}

export default function* () {
	yield all([watchRegisterUser(), watchLoginUser(), watchLogoutUser()]);
}
