import React from 'react';

const ListItem = ({ item, id }) => {
	// item.pictures[0].url = This will be the first display pic
	const handlePicChange = (e) => {
		const mainPic = document.getElementById(`thumbnail${id}`);
		mainPic.src = e.target.src;
	} 

	const thumbnailList = () => {
		// item.thumbnailList this will be implemented once i figure out how to store the pictures.
		const dummyData = ['http://kaeleventservices.com/wp-content/uploads/2012/01/event_21.png', 'http://ramelite.com/n/wp-content/uploads/2014/05/event_management.jpg', 'http://www.nymakeover.com/wp-content/uploads/2014/07/venu1.jpg', 'http://publicrelationsfirmstoronto.weebly.com/uploads/2/6/8/7/26876732/1911909_orig.jpg', 'http://stromva.com/wp-content/uploads/2016/07/corporate-event.jpg'];
		return dummyData.map((url, i) => {
			return <div onClick={handlePicChange} className='miniThumbnail' key={i}><img src={url} /></div>
		});
	}

	return (
		<div className='itemContainer clear' >
			<div className='mainThumbnailDiv'> 
				<img id={`thumbnail${id}`} src='http://www.eventsbysaker.com/wp-content/uploads/2015/02/event1.jpg'/>
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