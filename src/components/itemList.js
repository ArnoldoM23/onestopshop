import React from 'react';
import ListItem from './listItem.js';


const ItemList = ({list}) => {
	const rightSection = [];
	const leftSection = [];
  list.forEach((item, i) => {
		if (i % 2 === 0 ) { 
			rightSection.push(<ListItem item={item} key={i} />)
		} else {
		 leftSection.push(<ListItem item={item} key={i} />)
		}
	});

	return(
		<div className='listContainer'>
			<section className='leftSection'>{ leftSection }</section>
			<section className='rightSection'>{ rightSection }</section>
		</div>
	);
}

export default ItemList;