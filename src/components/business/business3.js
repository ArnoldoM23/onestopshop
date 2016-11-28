import React, { Component } from 'react';
import ItemList from '../itemList';


class Business3 extends Component {
	constructor(){
		super()
		this.state = { list: ["place 3","place 3","place 3","place 3","place 3","place 3"]}
	}

	render(){
		return(
			<div className='vendorContainer'>
				<ItemList list={this.state.list}/>
			</div>
		)
	}
}

export default Business3;