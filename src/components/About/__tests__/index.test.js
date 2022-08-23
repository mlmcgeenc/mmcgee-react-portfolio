import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from '../about';

afterEach(cleanup);

describe('About component', () => {
	it('renders', () => {
		render(<About />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});
