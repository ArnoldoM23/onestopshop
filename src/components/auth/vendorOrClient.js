import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class VendorOrClient extends Component {
	componentWillMount() {
		if (window.location.search.indexOf('id') !== -1) {
			const id = window.location.search.slice(4)
			this.props.getUserId(id);
		}
	}

	handleClick(e) {
		if (this.props.userId) {
			this.props.createVendorOrClient(e.target.innerHTML+'s', Number(this.props.userId));	
		}
	}

	render(){
		return (
			<section className='authContainer'>
				<div><button onClick={ this.handleClick.bind(this) }>Client</button></div>
				<div><button onClick={ this.handleClick.bind(this) }>Vendor</button></div>
			</section>
		);
	}
};

function mapStateToProps(state) {
	return { userId: state.user.userId }
}

export default connect(mapStateToProps, actions)(VendorOrClient);
