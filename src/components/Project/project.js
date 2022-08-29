import React from 'react';
import '../../Assets/css/custom.css';
import logo from '../../Assets/images/Circle-Logo.png';
import html5 from '../../Assets/images/tech-logos/html5.png';
import css from '../../Assets/images/tech-logos/css3.png';
import js from '../../Assets/images/tech-logos/js.png';
import bootstrap from '../../Assets/images/tech-logos/bootstrap.png';
import node from '../../Assets/images/tech-logos/node.png';
import mysql from '../../Assets/images/tech-logos/mysql.png';
import express from '../../Assets/images/tech-logos/express.png';
import sequelize from '../../Assets/images/tech-logos/sequelize.png';
import mongoDB from '../../Assets/images/tech-logos/mongoDB.png';
import handlebars from '../../Assets/images/tech-logos/handlebars.png';
import react from '../../Assets/images/tech-logos/react.png';
import githubLogo from '../../Assets/images/tech-logos/github.png';

const Project = ({ project }) => {
	const { name, screenshot, link, tech } = project;

	const getObject = (entry) => {
		console.log('Switch entry', entry.entry);
		switch (entry.entry) {
			case 'html':
				return {
					name: 'html',
					backgroundImage: html5,
					link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
				};
			case 'css':
				return {
					name: 'css',
					backgroundImage: css,
					link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
				};
			case 'javascript':
				return {
					name: 'javascript',
					backgroundImage: js,
					link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				};
			case 'jquery':
				return { name: 'jquery' };
			case 'bootstrap':
				return {
					name: 'bootstrap',
					backgroundImage: bootstrap,
					link: 'https://getbootstrap.com',
				};
			case 'express':
				return {
					name: 'express',
					backgroundImage: express,
					link: 'https://expressjs.com',
				};
			case 'mysql':
				return {
					name: 'MySQL',
					backgroundImage: mysql,
					link: 'https://www.mysql.com',
				};
			case 'sequelize':
				return {
					name: 'sequelize',
					backgroundImage: sequelize,
					link: 'https://sequelize.org',
				};
			case 'handlebars':
				return {
					name: 'handlebars',
					backgroundImage: handlebars,
					link: 'https://handlebarsjs.com',
				};
			case 'mongodb':
				return {
					name: 'mongodb',
					backgroundImage: mongoDB,
					link: 'https://www.mongodb.com',
				};
			case 'mongoose':
				return { name: 'mongoose' };
			case 'react':
				return {
					name: 'react',
					backgroundImage: react,
					link: 'https://reactjs.org',
				};
			default:
				return { name: 'default' };
		}
	};

	const StackIcon = (entry) => {
		let object = getObject(entry);
		console.log('StackIcon object:', object);
		return (
			<a href={`${object.link}`} target='_blank'>
				<img src={`${object.backgroundImage}`} className='mx-1 tech-icon' />
			</a>
		);
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
				<div className='card-title-and-link'>
					<div className='card-title'>{name}</div>
					<a href='www.gothub.com' className='github-link'>
						<img
							src={`${githubLogo}`}
							alt='github icon'
							className='github-logo'
						></img>
						View on github
					</a>
				</div>
				<div className='card-info'>
					<p>This is information about the project</p>
					<div className='d-flex col-12'>
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
