import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../footer';

afterEach(cleanup);

describe('Footer component', () => {
	it('renders', () => {
		render(<Footer />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
	});
});
