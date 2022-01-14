import React, { useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';
import data from '../../data';

export default function CommentWrapper({ comment }) {
	const [replyMode, setReplyMode] = useState(localStorage.getItem('typedContent').length > 0);

	return (
		<div className='CommentWrapper'>
			<Comment comment={comment} onReply={() => setReplyMode((replyMode) => !replyMode)} />

			{replyMode && (
				<TextInput img={data.currentUser.image.png} placeholder='Add a reply...' />
			)}
		</div>
	);
}

// TODO: on replyMode set to true, set every other CommentWrapper's replyMode to false
