import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Contact from '../contact';

afterEach(cleanup);

describe('Contact component', () => {
	it('renders', () => {
		render(<Contact />);
	});

	it('matches snapshit DOM node structure', () => {
		const { asFragment } = render(<Contact />);
		expect(asFragment()).toMatchSnapshot();
	});
});
