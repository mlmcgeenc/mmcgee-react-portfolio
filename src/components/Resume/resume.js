import { render } from '@testing-library/react';
import React from 'react';
import resume from '../../Assets/files/mcgee-resume.docx'

const Resume = () => {
	return (
		<div>
			<a href='../../Assets/files/mcgee-resume.docx' className='btn btn-lg btn-primary col-4 mt-4 p-3' download>Download My Resume</a>
		</div>
	);
};

export default Resume;
