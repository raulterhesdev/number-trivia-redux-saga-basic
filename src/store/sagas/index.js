import { all } from 'redux-saga/effects';
import numbersSaga from './numbersSaga';
import authSaga from './authSaga';

export default function* saga() {
	yield all([numbersSaga(), authSaga()]);
}
