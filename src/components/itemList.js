import React from 'react';
import ListItem from './listItem.js';


const ItemList = ({list}) => {
	const renderList = list.map((item, i) => {
		return <ListItem item={item} key={i} />
	});

	return(
		<div className='listContainer'>
			{ renderList }
		</div>
	);
}

export default ItemList;