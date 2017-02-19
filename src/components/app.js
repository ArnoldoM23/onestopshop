import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
	componentDidMount(){
		// This will grab the token from the url store in the localstorage
		if (window.location.search.indexOf('token') !== -1) {
			const token = window.location.search.slice(7);
			localStorage.setItem('token', token);
			this.props.passortLogin();
		}
	}
	render(){
		return (
			<div>
				{ this.props.children }
			</div>
		)
	}
}

export default connect(null, actions)(App);
