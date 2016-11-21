import React, { Component } from 'react';
import MiniClientProfile from './miniClientProfile';

//Make search bar into separate component
class VendorProfile extends Component {
	constructor(){
		super()
		this.state = {client: {date: 'April 25, 2016', time: '10:00 am', location: 'some place cool', todoList: ['get ballon', 'get cake', 'pick up cups']}}
	}

	render(){
		return (
			<div>
				<div className='clientThumbnail'>
					<img src=''/>	
				</div>
				<div>
					<div className='customesCompletedList'><p>name: Jordan paid: $5000 </p></div>
					<div className='customesPendingList'><p>name: Jordan pending: $5000 </p></div>
				</div>
				<div className='vendorList'>
					<div className='searchBar'>
						<input type='text' placeholder='search for client'/>
						<button>Search</button>
					</div>
					<div className='willBeDropDown'>
						<button>send Message</button>
						<div className='hideOrShowdiv'>
							<MiniClientProfile client={this.state.client} />
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default VendorProfile;