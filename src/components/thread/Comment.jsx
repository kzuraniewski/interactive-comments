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

export default function Comment({ commentData, ...other }) {
	const isDesktop = window.screen.width >= breakpoints.lg;
	const { image, username, createdAt, content } = commentData;

	return (
		<div className='Comment' {...other}>
			{isDesktop ? (
				<>
					<KarmaCounter />

					<div>
						<div className='Comment__strip'>
							<UserData img={image.png} username={username} createdAt={createdAt} />
							<Actions reply />
						</div>

						<Content text={content} />
					</div>
				</>
			) : (
				<>
					<UserData img={image.png} username={username} createdAt={createdAt} />

					<Content text={content} />

					<div className='Comment__strip'>
						<KarmaCounter />
						<Actions reply />
					</div>
				</>
			)}
		</div>
	);
}
