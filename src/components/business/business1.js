import React, { Component } from 'react';
import ItemList from '../itemList';

class Business1 extends Component {

	constructor(){
		super()
		this.state = { list: ["place 1","place 1","place 1"] }
	}

	render(){
		return(
			<div className=''>
				<ItemList list={this.state.list}/>
			</div>
		)
	}

}

export default Business1;