import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Project from '../project';

afterEach(cleanup);

describe('Project component', () => {
	it('renders', () => {
		render(<Project />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Project />);
		expect(asFragment()).toMatchSnapshot();
	});
});
