import React, { useState } from 'react';
import data from './data';
import CommentSection from './comment-section/CommentSection';
import Modal from './Modal';

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div style={{ maxWidth: '700px', margin: '0 auto', padding: '25px' }}>
			<CommentSection
				currentUser={data.currentUser}
				comments={data.comments}
				openModal={() => setIsModalOpen(true)}
			/>

			<Modal
				isOpen={isModalOpen}
				title='Delete comment'
				description="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
				cancel='NO, CANCEL'
				confirm='YES, DELETE'
				onConfirm={() => setIsModalOpen(false)}
				onCancel={() => setIsModalOpen(false)}
			/>
		</div>
	);
}
