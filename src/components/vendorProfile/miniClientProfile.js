import React, { Component } from 'react';

const MiniClientProfile = ({client}) => {
	const todoList = client.todoList.map((task, i) => {
		return <div className='task' key={i}>{ task }<input type='checkbox'/></div>
	});

	return (
		<div>
			<div className='clientThumbnail'>
				<img src=''/>	
			</div>
			<div>
				<p>{client.date}</p>
				<p>{client.time}</p>
				<p>{client.location}</p>
			</div>
			<div className='todoList'>
				{ todoList }
			</div>	
			<button>Send Message</button>
			<p>Payment Status</p>
		</div>
	);
}

export default MiniClientProfile;