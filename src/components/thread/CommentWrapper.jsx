import React, { useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';

export default function CommentWrapper({ commentData }) {
	const [replyMode, setReplyMode] = useState(false);

	return (
		<div className='CommentWrapper'>
			<Comment commentData={commentData} />

			{replyMode && <TextInput img={img} placeholder='Add a reply...' />}
		</div>
	);
}
