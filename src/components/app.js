import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
	
	componentWillMount(){
		// This will grab the token from the url store in the localstorage
		if (window.location.search.indexOf('token') !== -1) {
			const token = window.location.search.slice(7);
			window.localStorage.setItem('token', token);
			this.props.passortLogin();
		}
	}

	render(){
		return (
			<div className='appContainer'>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}