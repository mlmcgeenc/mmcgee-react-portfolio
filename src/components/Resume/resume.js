import { render } from '@testing-library/react';
import React from 'react';
import resume from '../../Assets/files/mcgee-resume.docx';

const Resume = () => {
	return (
		<div>
			<a
				href='../../Assets/files/mcgee-resume.docx'
				className='btn btn-lg btn-primary col-4 mt-4 p-3'
				download
			>
				Download My Resume
			</a>
			<div className='resume-container glass-effect col-12 col-sm-10 col-md-8 col-xl-6 mx-auto'>
				<h1>Front-end Proficiencies</h1>
        <hr />
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>jQuery</li>
					<li>responsive design</li>
					<li>Bootstrap</li>
					<li>Foundation</li>
					<li>React</li>
				</ul>
				<h1>Back-end Proficiencies</h1>
        <hr />
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB, Mongoose</li>
					<li>REST</li>
					<li>GraphQL</li>
				</ul>
			</div>
		</div>
	);
};

export default Resume;
