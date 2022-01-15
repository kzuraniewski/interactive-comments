import React from 'react';
import Avatar from '../Avatar';
import Reference from '../Reference';
import './UserData.css';
import data from '../../data';

export default function UserData({ img, username, createdAt }) {
	return (
		<div className='UserData'>
			<Avatar src={img} />

			<Reference username={username} />

			{username === data.currentUser.username && <div className='UserData__you'>you</div>}

			<div className='UserData__created-at'>{createdAt}</div>
		</div>
	);
}
