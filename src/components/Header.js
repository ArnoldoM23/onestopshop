import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		const userProfile = this.props.userType === 'Vendors' ? 'vendorProfile' : 'clientProfile';
		if(this.props.authenticate){
			return [
				<li key={1}>
					<Link to="/signout">Sign Out</Link>
				</li>,
				<li  key={2}>
					<Link to={`/${userProfile}`}>Client Name</Link>
				</li>
			];
		}else{
			return [
				<li key={1} >
					<Link to="/signin" >Sign In</Link>
				</li>,
				<li  key={2}>
					<Link to="/signup">Sign Up</Link>
				</li>
			];	
		}
	}



	render(){
		return (
			<header>
				<nav>
					<div className='row'>
						<img src='' atl='app-logo'/>
						<ul className='main-nav'>
							<li><Link to='#'>Venues</Link></li>
							<li><Link to='#'>How it works</Link></li>
							<li><Link to='#'>Our cities</Link></li>
							{ this.renderLoginLinks() }
						</ul>
					</div>
				</nav>
				<div className='hero-text-box'>
					<h1>Its your special day.<br/>Let us make it unique .</h1>
					<a className='btn btn-full' href='#'>Venues</a>
					<a className='btn btn-ghost' href='#'>Show me more</a>
				</div>
			</header>
		);
	}
}

function mapStateToProps(state){
	return { authenticate: state.auth.authenticated, userType: state.user.userType }
}

export default connect(mapStateToProps)(Header);