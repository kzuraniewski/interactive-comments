import React, { useState } from 'react';
import TextInput from '../TextInput';
import './CommentSection.css';
import Thread from './Thread';

export default function CommentSection({ currentUser, comments }) {
	const [replyAt, setReplyAt] = useState(null);

	return (
		<div className='CommentSection'>
			{comments.map((comment, index) => (
				<Thread key={index} comment={comment} replyAt={replyAt} setReplyAt={setReplyAt} />
			))}

			<TextInput img={currentUser.image.png} placeholder='Add a comment...' />
		</div>
	);
}
