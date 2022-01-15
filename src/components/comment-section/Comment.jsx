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

export default function Comment({ comment, onReply, ...other }) {
	const isDesktop = window.screen.width >= breakpoints.lg;
	const {
		content,
		createdAt,
		score,
		user: {
			image: { png: img },
			username,
		},
		replyingTo,
	} = comment;

	return (
		<div className='Comment' {...other}>
			{isDesktop ? (
				<>
					<KarmaCounter karma={score} />

					<div>
						<div className='Comment__strip'>
							<UserData img={img} username={username} createdAt={createdAt} />
							<Actions reply={onReply} />
						</div>

						<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
					</div>
				</>
			) : (
				<>
					<UserData img={img} username={username} createdAt={createdAt} />

					<Content text={replyingTo ? `@${replyingTo} ` + content : content} />

					<div className='Comment__strip'>
						<KarmaCounter karma={score} />
						<Actions reply={onReply} />
					</div>
				</>
			)}
		</div>
	);
}

//TODO: RWD moved to css entirely
