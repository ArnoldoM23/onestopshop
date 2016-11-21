import React, { Component } from 'react';

class VendorLayout extends Component {

	renderThumbnails() {
		// return this.props.thubnailPics.map((pic, i) => {
		// 	return <div className='vendorPics'>
		// 						<img src='' />
		// 					</div>
		// })
	}

	renderReviews() {
		// return this.props.reviews.map((review, i) => {
		// 	return <div className='vendorReview'>
		// 					 <p>this was a great vendor 5 stars</p>
		// 				 </div>
		// })
	}

	render(){
		return (
			<div>
				<div className='VendorLayoutHeader'>
					<div className='circleLogo'>
						This div will be a circleLogo with picture
						<img src=''/>
					</div>
					<div className='companyInfo'>
						<h1>{'this.props.companyName'}</h1>
						<p>{'this.props.phoneNumber'}</p>
					</div>
				</div>
				<div className='thubnailPics'>
					{'this.renderThumbnails()'}
				</div>
				<div className='vendorReview'>
					{'this.renderReviews()'}
				</div>
			</div>
		);
	}
}

export default VendorLayout;