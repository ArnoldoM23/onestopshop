import React from 'react';

const ListItem = ({ item }) => {

	const thumbnailList = () => {
		// item.thumbnailList this will be implemented once i figure out how to store the pictures.
		const dummyData = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
		return dummyData.map((pic, i) => {
			return <div className='miniThumbnail' key={i}><img className='thumbnail' src='http://kaeleventservices.com/wp-content/uploads/2012/01/event_21.png' /></div>
		});
	}

	return (
		<div className='itemContainer clear' >
			<div className='mainThumbnailDiv'> 
				<img className='thumbnail' src='http://www.eventsbysaker.com/wp-content/uploads/2015/02/event1.jpg'/>
			</div>
			<div className='thumbList'>
				{ thumbnailList() }
			</div>
			<div className='vendorMsg'>
				<p>This is the best venue in town This is the best venue in town This is the best venue in town</p>
			</div>
			<button className='btn view'>View</button>
		</div>
	);
}

export default ListItem;