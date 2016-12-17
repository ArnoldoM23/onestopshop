import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		if(this.props.authenticate){
			return [
				<li key={1}>
					<Link to="/signout">Sign Out</Link>
				</li>,
				<li  key={2}>
					<Link to="/clientProfile">Client Name</Link>
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
			<header>
				<nav>
					<div >
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
					<h1>Goodbye junk food.<br/> Hello super healthy meals.</h1>
					<a className='btn btn-full' href='#'>I'm hungry</a>
					<a className='btn btn-ghost' href='#'>Show me more</a>
				</div>
			</header>
		);
	}
}

function mapStateToProps(state){
	return { authenticate: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);