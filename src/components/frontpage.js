import React, { Component } from 'react';
import ItemList from './itemList';

export default class FrontPage extends Component {

	constructor(){
		super()
		this.state = { list: ["place 1","place 1","place 1","place 1","place 1","place 1"]}
	}

	render(){
		return (
			<div className='homeContainer'>
				<ItemList list={this.state.list} />
			</div>
		);
	}
}