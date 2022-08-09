import React from 'react';
import data from './data';
import CommentSection from './comment-section/CommentSection';
import ModalProvider from './comment-section/ModalProvider';

export default function App() {
	return (
		<ModalProvider>
			<div style={{ maxWidth: '700px', margin: '0 auto', padding: '25px' }}>
				<CommentSection currentUser={data.currentUser} comments={data.comments} />
			</div>
		</ModalProvider>
	);
}
