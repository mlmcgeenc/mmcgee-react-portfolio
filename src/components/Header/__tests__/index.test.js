import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../header';

afterEach(cleanup);

describe('Header component', () => {
	// baseline test
	it('renders', () => {
		render(<Header />);
	});

	// snapshot test
	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Header />);
		expect(asFragment()).toMatchSnapshot();
	});
});
