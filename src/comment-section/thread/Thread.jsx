import React, { useRef } from 'react';
import TextInput from '../TextInput';
import Comment from './Comment';
import './Thread.css';
import ThreadHead from './ThreadHead';
import data from '../../data';

export default function Thread({ comment, replyAt, setReplyAt, openModal }) {
	const repliesRef = useRef(null);
	const replyTo = useRef(null);

	return (
		<>
			<div className='Thread'>
				<ThreadHead
					comment={comment}
					replyAt={replyAt}
					setReplyAt={setReplyAt}
					openModal={openModal}
				/>

				{comment.replies.length > 0 && (
					<div ref={repliesRef} className='Thread__replies'>
						{comment.replies.map((reply, index) => (
							<Comment
								key={index}
								comment={reply}
								openModal={openModal}
								onReply={() => {
									setReplyAt(repliesRef);
									replyTo.current = reply.user.username;
								}}
							/>
						))}

						{repliesRef === replyAt && (
							<TextInput
								img={data.currentUser.image.png}
								onSend={() => console.log('Reply sent')}
								placeholder='Add a reply...'
								initialValue={`@${replyTo.current} `}
								focus
							/>
						)}
					</div>
				)}
			</div>
		</>
	);
}
