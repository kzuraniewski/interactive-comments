import React, { useState } from 'react';
import TextInput from './TextInput';
import './CommentSection.css';
import Thread from './thread/Thread';
import { Comment, User } from '@/data';

export type CommentSectionProps = {
	currentUser: User;
	comments: Comment[];
};

export default function CommentSection({ currentUser, comments }: CommentSectionProps) {
	const [replyAt, setReplyAt] = useState(null);

	return (
		<div className='CommentSection'>
			{comments.map((commentData, index) => (
				<Thread
					key={index}
					commentData={commentData}
					replyAt={replyAt}
					setReplyAt={setReplyAt}
				/>
			))}

			<TextInput
				img={currentUser.image.png}
				placeholder='Add a comment...'
				onSend={() => {}}
			/>
		</div>
	);
}
