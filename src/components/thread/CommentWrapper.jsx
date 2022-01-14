import React, { useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';
import data from '../../data';

export default function CommentWrapper({ commentData }) {
	const [replyMode, setReplyMode] = useState(false);

	return (
		<div className='CommentWrapper'>
			<Comment commentData={commentData} />

			{replyMode && (
				<TextInput img={data.currentUser.image.png} placeholder='Add a reply...' />
			)}
		</div>
	);
}
