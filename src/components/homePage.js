import React, { Component } from 'react';

export default class FrontPage extends Component {

	constructor(){
		super()
	}

	render(){
		return (
			<div className='homeContainer'>
				<hr/>
				<div className='leftThumbnailContainer'>
					<div>
						<h3>this will be a title</h3>
						<p>this will be some discription</p>
					</div>
					<div><img/></div>
				</div>
				<hr/>
				<div className='rightThumbnailContainer'>
					<div>
						<h3>this will be a title</h3>
						<p>this will be some discription</p>
					</div>
					<div><img/></div>
				</div>
				<hr/>
				<div className='leftThumbnailContainer'>
					<div>
						<h3>this will be a title</h3>
						<p>this will be some discription</p>
					</div>
					<div><img/></div>
				</div>
			</div>
		);
	}
}