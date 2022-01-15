import React, { useState } from 'react';
import './Comment.css';
import Content from '../Content';
import Actions from './Actions';
import KarmaCounter from './KarmaCounter';
import UserData from './UserData';
import data from '../../data';
import Textarea from '../Textarea';
import Btn from '../Btn';

const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

export default function Comment({ comment, onReply = null, ...other }) {
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

	// check if the comment belongs to the current user
	const currentUser = username === data.currentUser.username;
	// check if the device is desktop sized
	const isDesktop = window.screen.width >= breakpoints.lg;

	const [editMode, setEditMode] = useState(false);
	const [textareaValue, setTextareaValue] = useState(content);

	return (
		<div className='Comment' {...other}>
			{isDesktop ? (
				<>
					<KarmaCounter karma={score} />

					<div className='Comment__content-wrapper'>
						<div className='Comment__strip'>
							<UserData
								img={img}
								username={username}
								createdAt={createdAt}
								currentUser={currentUser}
							/>

							{/* edit & delete for currentUser, reply otherwise */}
							{currentUser ? (
								<Actions
									delete={() => {}}
									edit={() => setEditMode((editMode) => !editMode)}
								/>
							) : (
								<Actions reply={onReply} />
							)}
						</div>

						{editMode ? (
							<>
								<Textarea
									content={content}
									value={textareaValue}
									setValue={setTextareaValue}
								/>

								<Btn text='UPDATE' onClick={() => setEditMode(false)} />
								{/* doesn't update content for now */}
							</>
						) : (
							<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
						)}
					</div>
				</>
			) : (
				<>
					<UserData
						img={img}
						username={username}
						createdAt={createdAt}
						currentUser={currentUser}
					/>

					{editMode ? (
						<>
							<Textarea
								content={content}
								value={textareaValue}
								setValue={setTextareaValue}
							/>

							<Btn text='UPDATE' onClick={() => setEditMode(false)} />
							{/* doesn't update content for now */}
						</>
					) : (
						<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
					)}

					<div className='Comment__strip'>
						<KarmaCounter karma={score} />

						{currentUser ? (
							<Actions
								delete={() => {}}
								edit={() => setEditMode((editMode) => !editMode)}
							/>
						) : (
							<Actions reply={onReply} />
						)}
					</div>
				</>
			)}
		</div>
	);
}

//TODO: RWD moved to css entirely
