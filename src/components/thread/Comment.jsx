import React from 'react';
import './Comment.css';
import Content from '../Content';
import Actions from './Actions';
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
	const isDesktop = window.screen.width >= breakpoints.lg;

	return (
		<div className='Comment' {...other}>
			{isDesktop ? (
				<>
					<KarmaCounter />

					<div>
						<div className='Comment__strip'>
							<UserData img={img} username={username} createdAt={createdAt} />
							<Actions reply />
						</div>

						<Content text={text} />
					</div>
				</>
			) : (
				<>
					<UserData img={img} username={username} createdAt={createdAt} />

					<Content text={text} />

					<div className='Comment__strip'>
						<KarmaCounter />
						<Actions reply />
					</div>
				</>
			)}
		</div>
	);
}
