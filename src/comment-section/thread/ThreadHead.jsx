import React, { useEffect, useRef, useState } from 'react';
import './ThreadHead.css';
import Comment from './Comment';
import TextInput from '../TextInput';
import data from '../../data';

export default function ThreadHead({ commentData, replyAt, setReplyAt, onOpenModal }) {
	const [replyMode, setReplyMode] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		setReplyMode(replyAt === ref);
	}, [replyAt]);

	const handleReply = () => {
		setReplyAt(old => {
			if (old === ref) return null;
			return ref;
		});
	};

	const handleSend = () => {
		console.log('Reply sent');
		setReplyAt(null);
	};

	return (
		<div ref={ref} className='ThreadHead'>
			<Comment
				commentData={commentData}
				onReplyAction={handleReply}
				onOpenModal={onOpenModal}
			/>

			{replyMode && (
				<TextInput
					img={data.currentUser.image.png}
					onSend={handleSend}
					placeholder='Add a reply...'
					focus
				/>
			)}
		</div>
	);
}
