import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; 
import * as actions from '../../actions'

class VendorOrClient extends Component {

	handleClick(type){
		if (window.location.search.indexOf('id') !== -1) {
			const userId = window.location.search.slice(3);
			console.log("USER ID: ", userId);
			// localStorage.setItem('token', token);
			// this.createVendorOrClient(type);
		}
	}

	render(){
		return (
			<section className='authContainer'>
				<div><button onClick={ this.handleClick('Clients') }>Client</button></div>
				<div><button onClick={ this.handleClick('Vendors') }>Vendor</button></div>
			</section>
		);
	}
};

export default connect(null, actions)(VendorOrClient);
