import React from 'react';
import './Comment.css';
import Content from '../Content';
import KarmaCounter from './KarmaCounter';
import UserData from './UserData';
import Actions from './Actions';

const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

export default function Comment({ img, username, createdAt, text, ...other }) {
	return (
		<div className='Comment' {...other}>
			<UserData img={img} username={username} createdAt={createdAt} />

			<Content text={text} />

			<KarmaCounter />

			<Actions reply />
		</div>
	);
}
