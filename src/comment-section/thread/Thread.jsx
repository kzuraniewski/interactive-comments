import React, { useRef } from 'react';
import TextInput from '../TextInput';
import Comment from './Comment';
import './Thread.css';
import ThreadHead from './ThreadHead';
import data from '../../data';

export default function Thread({ commentData, replyAt, setReplyAt, onOpenModal }) {
	const repliesRef = useRef(null);
	const replyTo = useRef(null);

	return (
		<>
			<div className='Thread'>
				<ThreadHead
					commentData={commentData}
					replyAt={replyAt}
					setReplyAt={setReplyAt}
					onOpenModal={onOpenModal}
				/>

				{commentData.replies.length > 0 && (
					<div ref={repliesRef} className='Thread__replies'>
						{commentData.replies.map((reply, index) => (
							<Comment
								key={index}
								commentData={reply}
								onOpenModal={onOpenModal}
								onReplyAction={() => {
									setReplyAt(repliesRef);
									replyTo.current = reply.user.username;
								}}
							/>
						))}

						{repliesRef === replyAt && (
							<TextInput
								img={data.currentUser.image.png}
								onSend={() => {
									console.log('Reply sent');
									setReplyAt(null);
								}}
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
