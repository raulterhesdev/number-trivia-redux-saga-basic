import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/actionTypes';

const initialState = {
	currentFact: '',
	fetchError: null,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				currentFact: payload,
				fetchError: null,
			};
		case FETCH_DATA_FAIL:
			return {
				...state,
				fetchError: payload,
			};
		default:
			return state;
	}
};

export default reducer;
