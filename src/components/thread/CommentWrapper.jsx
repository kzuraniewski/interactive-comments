import React, { useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';

export default function CommentWrapper({ img, username, createdAt, text }) {
	const [replyMode, setReplyMode] = useState(false);

	return (
		<div className='CommentWrapper'>
			<Comment img={img} username={username} createdAt={createdAt} text={text} />

			{replyMode && <TextInput img={img} placeholder='Add a reply...' />}
		</div>
	);
}
