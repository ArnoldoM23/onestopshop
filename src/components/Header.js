import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		if(this.props.authenticate){
			return (
				<li className="">
					<Link to="/signout">Sign Out</Link>
				</li>
			);
		}else{
			return [
				<li className="" key={1} >
					<Link to="/signin" >Sign In</Link>
				</li>,
				<li className="" key={2}>
					<Link to="/signup">Sign Up</Link>
				</li>
				];	
		}
	}

	renderMenu(list){
		const menu = ['Home', 'business1', 'business2', 'business3', 'business4', 'business5', 'More'];
		return menu.map((item, i) => {
			if (item === 'Home') {
				return <li className='navItem' key={i}><Link to='/'>{item}</Link></li>
			}
			return <li className='navItem' key={i}><Link to={`/${item}`}>{item}</Link></li>
		})
	}


	render(){
		return (
			<div id='header'>
				<div className='loginButtons' >
					<ul >
						{ this.renderLoginLinks() }
					</ul>
				</div>
				<div className='menu'>
					<ul className='navbar'>
						{this.renderMenu()}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { authenticate: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);