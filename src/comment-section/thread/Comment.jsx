import React, { useState } from 'react';
import './Comment.css';
import Content from '../Content';
import Actions from './Actions';
import KarmaCounter from './KarmaCounter';
import UserData from './UserData';
import data from '../../data';
import Textarea from '../Textarea';
import Btn from '../Btn';

export default function Comment({ comment, onReply = null, openModal, ...other }) {
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

	const [editMode, setEditMode] = useState(false);
	const [textareaValue, setTextareaValue] = useState(content);

	return (
		<div className='Comment' {...other}>
			<UserData
				img={img}
				username={username}
				createdAt={createdAt}
				currentUser={currentUser}
			/>

			{editMode ? (
				<>
					<Textarea content={content} value={textareaValue} setValue={setTextareaValue} />

					<Btn text='UPDATE' onClick={() => setEditMode(false)} />
					{/* doesn't update content for now */}
				</>
			) : (
				<Content text={replyingTo ? `@${replyingTo} ` + content : content} />
			)}

			<KarmaCounter karma={score} />

			{/* edit & delete for currentUser, reply otherwise */}
			{currentUser ? (
				<Actions
					delete={openModal}
					// exitting edit mode through action will dismiss changes
					edit={() => setEditMode((editMode) => !editMode)}
				/>
			) : (
				<Actions reply={onReply} />
			)}
		</div>
	);
}
