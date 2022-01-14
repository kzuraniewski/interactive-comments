import React, { useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';
import data from '../../data';

export default function CommentWrapper({ commentData }) {
	const [replyMode, setReplyMode] = useState(localStorage.getItem('typedContent').length > 0);

	return (
		<div className='CommentWrapper'>
			<Comment
				commentData={commentData}
				onReply={() => setReplyMode((replyMode) => !replyMode)}
			/>

			{replyMode && (
				<TextInput img={data.currentUser.image.png} placeholder='Add a reply...' />
			)}
		</div>
	);
}
