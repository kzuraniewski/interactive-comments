import React, { useEffect, useRef, useState } from 'react';
import './CommentWrapper.css';
import Comment from './Comment';
import TextInput from '../TextInput';
import data from '../../data';

export default function CommentWrapper({ comment, replyAt, setReplyAt }) {
	const [replyMode, setReplyMode] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		setReplyMode(replyAt === ref);
	}, [replyAt]);

	return (
		<div ref={ref} className='CommentWrapper'>
			<Comment
				comment={comment}
				onReply={() => setReplyAt((old) => (old !== ref ? ref : null))}
			/>

			{replyMode && (
				<TextInput img={data.currentUser.image.png} placeholder='Add a reply...' />
			)}
		</div>
	);
}
