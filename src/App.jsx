import React from 'react';
import data from './data';
import CommentSection from './comment-section/CommentSection';

export default function App() {
	return (
		<div style={{ maxWidth: '700px', margin: '0 auto', padding: '25px' }}>
			<CommentSection currentUser={data.currentUser} comments={data.comments} />
		</div>
	);
}
