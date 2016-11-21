import React, { Component } from 'react';

class ClientProfile extends Component {

	render(){
		return (
			<div>
				<div className='clientThumbnail'>
					<img src=''/>	
				</div>
				<div>
					<p>buget = 12,000</p>
					<p>total = 5,000</p>
				</div>
				<div className='vendorList'>
					<div className='willBeDropDown'>
						<button>send Message</button>
						<div className='hideOrShowdiv'>
							meet with client = complete
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default ClientProfile;