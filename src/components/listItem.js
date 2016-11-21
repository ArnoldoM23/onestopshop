import React from 'react';

const ListItem = ({ item }) => {

	return (
		<div className='itemContainer' >
			<div > 
				<h1>{item}</h1>
				<img/>
			</div>
			<div>
				<p>This is the best venue in town</p>
				<button>View</button>
			</div>
		</div>

	);
}

export default ListItem;