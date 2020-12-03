import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../../utils/api';
import { FETCH_DATA_START } from '../actions/actionTypes';
import { fetchDataSuccess, fetchDataFail } from '../actions/index';

export function* fetchDataSaga(action) {
	try {
		const data = yield call(fetchData, action.payload);
		yield put(fetchDataSuccess(data));
	} catch (error) {
		yield put(fetchDataFail(error));
	}
}

export default function* saga() {
	yield all([takeEvery(FETCH_DATA_START, fetchDataSaga)]);
}
