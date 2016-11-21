import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		if(this.props.authenticate){
			return (
				<li className="btn btn-default log">
					<Link to="/signout">Sign Out</Link>
				</li>
			);
		}else{
			return [
				<li className="btn btn-default log" key={1} >
					<Link to="/signin" >Sign In</Link>
				</li>,
				<li className="btn btn-default log" key={2}>
					<Link to="/signup">Sign Up</Link>
				</li>
				];	
		}
	}

	renderMenu(list){
		const menu = ['Home', 'bussines1', 'bussines2', 'bussines3', 'bussines4', 'bussines5', 'More'];
		return menu.map((item, i) => {
			return <li className='nav' key={i}><Link to='/'>{item}</Link></li>
		})
	}


	render(){
		return (
			<div id='header'>
				<div >
					<ul >
						{ this.renderLoginLinks() }
					</ul>
				</div>
				<div className='menu group'>
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