import React from 'react';
import Avatar from '../Avatar';
import Reference from '../Reference';
import './UserData.css';

export default function UserData({ img, username, createdAt, currentUser }) {
	return (
		<div className='UserData'>
			<Avatar src={img} />

			<Reference username={username} />

			{currentUser && <div className='UserData__you'>you</div>}

			<div className='UserData__created-at'>{createdAt}</div>
		</div>
	);
}
