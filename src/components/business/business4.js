import React, { Component } from 'react';
import ItemList from '../itemList';

class Business4 extends Component {
	constructor(){
		super()
		this.state = { list: ["place 4","place 4","place 4","place 4","place 4","place 4"]}
	}

	render(){
		return(
			<div>
				<ItemList list={this.state.list}/>
			</div>
		)
	}
}

export default Business4;