import React from 'react';
import TextInput from '../TextInput';
import './CommentSection.css';
import Thread from './Thread';

export default function CommentSection({ currentUser, comments }) {
	return (
		<div className='CommentSection'>
			{comments.map((comment, index) => (
				<Thread key={index} comment={comment} />
			))}

			<TextInput img={currentUser.image.png} placeholder='Add a comment...' />
		</div>
	);
}
