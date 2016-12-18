import React, { Component } from 'react';
import Header from './Header';
import HomeSectionOne from './homepage/homesectionone.js';
import ItemList from './itemList';

export default class HomePage extends Component {

	constructor(){
		super()
	}

	render(){
		return (
			<div>
				<Header />
				<HomeSectionOne />
				<ItemList />
			</div>
		);
	}
}