import { combineReducers } from 'redux';
import Authentication from './auth_reducer';
import {reducer as form} from 'redux-form';
import UserType from './vendorOrClientReducer'; 

const rootReducer = combineReducers({
	form,
	auth: Authentication,
	user: UserType
});

export default rootReducer;