import { VENDORS, CLIENTS, USERID } from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case USERID: 
			return { ...state, userId: action.payload }
		case VENDORS:
			return { ...state, userType: 'Vendors' };
		case CLIENTS:
			return { ...state, userType: 'Clients' }
	}
	return state;
}