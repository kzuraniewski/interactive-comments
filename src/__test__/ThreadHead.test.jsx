import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';
import ThreadHead from '../comment-section/thread/ThreadHead';

const commentData = {
	id: 1,
	content:
		"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
	createdAt: '1 month ago',
	score: 12,
	user: {
		image: {
			png: require('../images/avatars/image-amyrobson.png'),
			webp: require('../images/avatars/image-amyrobson.webp'),
		},
		username: 'amyrobson',
	},
	replies: [],
};

const MockWrapped = () => {
	const [replyAt, setReplyAt] = useState(null);

	return <ThreadHead commentData={commentData} replyAt={replyAt} setReplyAt={setReplyAt} />;
};

describe('ThreadHead', () => {
	it('Allows toggling the reply textarea', () => {
		render(<MockWrapped />);

		const toggleButton = screen.getByRole('button', { name: /reply/i });
		act(() => toggleButton.click());

		const textara = screen.getByRole('textbox');
		expect(textara).toBeInTheDocument();
	});
});
