import {
	FETCH_DATA_START,
	FETCH_DATA_FAIL,
	FETCH_DATA_SUCCESS,
} from './actionTypes';

export const fetchDataStart = (queryParams) => ({
	type: FETCH_DATA_START,
	payload: queryParams,
});

export const fetchDataSuccess = (data) => ({
	type: FETCH_DATA_SUCCESS,
	payload: data,
});

export const fetchDataFail = (error) => ({
	type: FETCH_DATA_FAIL,
	payload: error,
});
