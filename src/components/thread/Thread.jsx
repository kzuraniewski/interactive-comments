import React from 'react';
import CommentWrapper from './CommentWrapper';

export default function Thread({ comment }) {
	return (
		<>
			<div className='Thread'>
				<CommentWrapper commentData={comment} />

				<div className='Thread__replies'>
					{comment.replies.map((reply, index) => (
						<CommentWrapper key={index} commentData={reply} />
					))}
				</div>
			</div>
		</>
	);
}
