import React from 'react';
import './Thread.css';
import CommentWrapper from './CommentWrapper';

export default function Thread({ comment }) {
	return (
		<>
			<div className='Thread'>
				<CommentWrapper comment={comment} />

				{comment.replies.length > 0 && (
					<div className='Thread__replies'>
						{comment.replies.map((reply, index) => (
							<CommentWrapper key={index} comment={reply} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
