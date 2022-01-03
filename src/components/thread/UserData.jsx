import React from 'react';
import Avatar from '../Avatar';
import './UserData.css';

export default function UserData({ img, username, createdAt }) {
	return (
		<div className='UserData'>
			<Avatar src={img} />
			<a href='' className='UserData__username'>
				{username}
			</a>
			<div className='UserData__created-at'>{createdAt}</div>
		</div>
	);
}
