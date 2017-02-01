import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';
import jwtDecode from 'jwt-decode';

// const ROOT_URL = 'http://localhost:3090/signin'
const ROOT_URL = 'http://shoponceserver.herokuapp.com'

export function signIn({email, password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				handleResponse(response, dispatch)
			})
			.catch(err => console.log(err));
	};
};

export function signUp({email, password}){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				handleResponse(response, dispatch);
			})
			.catch(err => console.log(err));
	};
};

export function updateClient(){
	return function(dispatch){
		const token = jwtDecode(localStorage.getItem('token'));
		console.log('token', token)
		axios.post(`${ROOT_URL}/client/${token.id}/updateClient`, {clientFirstName: "Charlie", clientLastName: "Munoz"}, {
			headers: { authorization: getToken() }
		} )
			.then(response => {
				console.log('response', response)
				// handleResponse(response, dispatch);
			})
			.catch(err => console.log(err));
	};
};

export function passortLogin(){
	return { type: AUTH_USER }
}
 
export function fetchMesssages(){
	return function(dispatch){
		axios.get(ROOT_URL, {
			headers: { authorization: getToken()}
		})
		.then(response =>{
			dispatch({
				type: FETCH_MESSAGE,
				payload: response.data.message
			});
		})
		.catch(err => console.log(err));
	}
}

export function getAllVendor(cb){
	return function(dispatch){
		axios.get(ROOT_URL, {
			headers: {authorization: getToken()}
		})
		.then(response => { cb(response) })
		.catch(err => console.log(err));
	}
}

export function signoutUser(){
	localStorage.removeItem('token')
	return {type: UNAUTH_USER};
}

// Helper function 
function handleResponse(response, dispatch){
	dispatch({type: AUTH_USER})
	localStorage.setItem('token', response.data.token);
	browserHistory.push('/')
};

function getToken(){
	return localStorage.getItem('token');
}

