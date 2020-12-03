import { combineReducers } from 'redux';
import authReducer from './auth';
import numbersReducer from './numbers';

export default combineReducers({ numbers: numbersReducer, auth: authReducer });
