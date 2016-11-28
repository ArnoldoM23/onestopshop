import React, { Component } from 'react';
import ItemList from '../itemList';

class Business5 extends Component {
	constructor(){
		super()
		this.state = { list: ["place 5","place 5","place 5","place 5","place 5","place 5"]}
	}

	render(){
		return(
			<div className='vendorContainer'>
				<ItemList list={this.state.list}/>
			</div>
		)
	}
}

export default Business5;