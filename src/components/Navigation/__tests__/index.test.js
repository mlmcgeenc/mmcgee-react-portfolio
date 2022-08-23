import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from '../nav';

afterEach(cleanup);

describe('Navigation component', () => {
	it('renders', () => {
		render(<Nav />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});
