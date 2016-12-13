import React, { Component } from 'react';

class ClientProfile extends Component {

	render(){
		return (
			<div>
				<div>
					<div className='clientThumbnail'>
						<img className='' src=''/>	
					</div>
					<div className='buget'>
						<h3>buget = 500,000</h3>
					</div>
					<div className='buget'>
						<h3>total = 200,000</h3>
					</div>
				</div>
				<div className='vendorList clear'>
					<div className='willBeDropDown'>
						<div><button className='btn log'>send Message</button></div>
						<div className='hideOrShowdiv'>
							<h3>vendor 1 foods</h3>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default ClientProfile;