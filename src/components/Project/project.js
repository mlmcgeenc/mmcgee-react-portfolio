import React from 'react';
import '../../Assets/css/custom.css';

const Project = ({ project }) => {
	const { name, screenshot, link, tech } = project;
	return (
		<div
			className='col-12 col-md-5 project-card-container'
			style={{
				backgroundImage: `url(${screenshot})`,
				backgroundSize: 'cover',
			}}
		>
			<div className='project-card-content'>
				<div className='card-title'>{name}</div>
				<div className='card-info'>
					<p>This is information about the project</p>
          <p>React JS Node Express</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
