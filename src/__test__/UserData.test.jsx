import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserData from '../comment-section/thread/UserData';

describe('UserData', () => {
	it('Displays chip when at current user', () => {
		render(<UserData currentUser={true} />);

		const chip = screen.getByText(/you/i);
		expect(chip).toBeInTheDocument();
	});
});
