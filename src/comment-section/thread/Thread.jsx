import React from 'react';
import Comment from './Comment';
import './Thread.css';
import ThreadHead from './ThreadHead';

export default function Thread({ comment, replyAt, setReplyAt, openModal }) {
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
					<div className='Thread__replies'>
						{comment.replies.map((reply, index) => (
							<Comment
								key={index}
								comment={reply}
								openModal={openModal}
								onReply={() => {}}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
}
