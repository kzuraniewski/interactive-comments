import React from 'react';
import './Thread.css';
import CommentWrapper from './CommentWrapper';

export default function Thread({ comment, replyAt, setReplyAt, openModal }) {
	return (
		<>
			<div className='Thread'>
				<CommentWrapper comment={comment} replyAt={replyAt} setReplyAt={setReplyAt} openModal={openModal} />

				{comment.replies.length > 0 && (
					<div className='Thread__replies'>
						{comment.replies.map((reply, index) => (
							<CommentWrapper
								key={index}
								comment={reply}
								replyAt={replyAt}
								setReplyAt={setReplyAt}
								openModal={openModal}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
}
