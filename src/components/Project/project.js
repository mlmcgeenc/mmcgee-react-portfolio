import React from 'react';
import '../../Assets/css/custom.css';
import logo from '../../Assets/images/Circle-Logo.png';

const Project = ({ project }) => {
	const { name, screenshot, link, tech } = project;

  const getObject = (entry) => {
    console.log('Switch entry', entry.entry)
    switch (entry.entry) {
			case 'html':
				return { name: 'html' };
			case 'css':
				return { name: 'css' };
			case 'javascript':
				return { name: 'javascript' };
			case 'jquery':
				return { name: 'jquery' };
			case 'express':
				return { name: 'express' };
			case 'mysql':
				return { name: 'MySQL' };
			case 'sequelize':
				return { name: 'sequelize' };
			case 'handlebars':
				return { name: 'handlebars' };
			case 'mongodb':
				return { name: 'mongodb' };
			case 'mongoose':
				return { name: 'mongoose' };
			case 'react':
				return { name: 'react' };
			default:
				return {name: 'default'};
		}
  }

	const StackIcon = (entry) => {
    let object = getObject(entry)
    console.log('StackIcon object:', object)
    return (
      <div className='mx-1'>{object.name}</div>
    )
	};

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
					<div className='d-flex col-12 test'>
						{tech.map((entry) => {
							console.log('map entry', entry);
							return <StackIcon entry={entry} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
