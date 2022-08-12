import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Content from '../comment-section/Content';

describe('Content', () => {
	it('Finds and formats user references', () => {
		render(<Content text={'Lorem ipsum @dolor sit amet'} />);
		const element = screen.getByRole('link', { text: '@dolor' });

		expect(element).toBeInTheDocument();
	});
});
