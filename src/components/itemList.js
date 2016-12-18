import React from 'react';
import ListItem from './listItem.js';


const ItemList = ({list}) => {
	const rightSection = [];
	const leftSection = [];
 //  list.forEach((item, i) => {
	// 	if (i % 2 === 0 ) { 
	// 		rightSection.push(<ListItem item={item} id={i} key={i} />)
	// 	} else {
	// 	 leftSection.push(<ListItem item={item} id={i} key={i} />)
	// 	}
	// });

	return(
		<section className='listContainer'>
			<div className='row'>
				<h2>choose from newly discovered venues</h2>
			</div>
			<div className='row'>
				<div className='col span-1-of-3'>	
					<div className='itemContainer'>
						<figure className='venue-photo'>
							<img src='http://www.eventsbysaker.com/wp-content/uploads/2015/02/event1.jpg'/>
						</figure>
						<div>
							<ul className='thumbNailList'>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order from 8 am to 12 pm</li>
								<li><i className='ion-ios-close-empty icon-small'></i></li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-full' href='#'>View</a>
						</div>
					</div>
				</div>
				<div className='col span-1-of-3'>	
					<div className='itemContainer'>
						<figure className='venue-photo'>
							<img src='http://www.eventsbysaker.com/wp-content/uploads/2015/02/event1.jpg'/>
						</figure>
						<div>
							<ul className='thumbNailList'>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order from 8 am to 12 pm</li>
								<li><i className='ion-ios-close-empty icon-small'></i></li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-full' href='#'>View</a>
						</div>
					</div>
				</div>
				<div className='col span-1-of-3'>	
					<div className='itemContainer'>
						<figure className='venue-photo'>
							<img src='http://www.eventsbysaker.com/wp-content/uploads/2015/02/event1.jpg'/>
						</figure>
						<div>
							<ul className='thumbNailList'>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>1 meal</li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Order from 8 am to 12 pm</li>
								<li><i className='ion-ios-close-empty icon-small'></i></li>
								<li><i className='ion-ios-checkmark-empty icon-small'></i>Free delivery</li>
							</ul>
						</div>
						<div>
							<a className='btn btn-full' href='#'>View</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ItemList;