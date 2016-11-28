import React, { Component } from 'react';
import ItemList from '../itemList';


class Business2 extends Component {
	constructor(){
		super()
		this.state = { list: ["place 2","place 2","place 2","place 2","place 2","place 2"]}
	} 

	render(){
		return(
			<div className='vendorContainer'>
				<ItemList list={this.state.list}/>
			</div>
		)
	}
}

export default Business2;