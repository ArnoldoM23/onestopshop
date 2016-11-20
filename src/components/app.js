import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
	render(){
		return (
			<div className='appContainer'>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}