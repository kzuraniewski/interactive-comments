import React from 'react';
import './Comment.css';
import Content from '../Content';
import ActionBtn from './ActionBtn';
import KarmaCounter from './KarmaCounter';
import UserData from './UserData';

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
			<KarmaCounter />

			<div>
				<div className='Comment__header'>
					<UserData img={img} username={username} createdAt={createdAt} />
					<ActionBtn theme='reply' text='Reply' />
				</div>

				<Content text={text} />
			</div>
		</div>
	);
}
