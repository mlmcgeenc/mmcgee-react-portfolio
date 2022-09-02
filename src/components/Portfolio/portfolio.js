import React from "react";
import 'bootstrap'
import '../../Assets/css/custom.css'
import Project from '../Project/project'
import screenshot from '../../Assets/images/screenshots/demo-screenshot.png'

const Portfolio = () => {
  const projects = [
		{
			name: 'Simple Portfolio',
			screenshot: screenshot,
			repoLink: null,
			deployedLink: null,
			tech: ['html', 'css'],
		},
		{
			name: 'Code Quiz',
			screenshot: screenshot,
			repoLink: 'https://github.com/mlmcgeenc/class-portfolio',
			deployedLink: 'https://mlmcgeenc.github.io/class-portfolio/',
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Weather Dashboard',
			screenshot: screenshot,
			repoLink: 'https://github.com/mlmcgeenc/js-quiz',
			deployedLink: 'https://mlmcgeenc.github.io/js-quiz/index.html',
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'EZ Stream',
			screenshot: screenshot,
			repoLink: 'https://github.com/mlmcgeenc/group-2-project-one',
			deployedLink: 'https://mlmcgeenc.github.io/group-2-project-one/',
			tech: ['html', 'css', 'javascript', 'foundation'],
		},
		{
			name: 'Employee Tracker',
			screenshot: screenshot,
			repoLink: 'https://github.com/mlmcgeenc/employee-tracker',
			deployedLink: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Local Music Scene',
			screenshot: screenshot,
			repoLink: 'https://github.com/cpm-128/local-music-scene',
			deployedLink: 'https://damp-plateau-16490.herokuapp.com/',
			tech: ['html', 'css', 'javascript', 'node', 'express', 'mysql', 'sequelize', 'handlebars'],
		},
	];

return (
	<div className="container">
    <div className="row d-flex justify-content-center align-items-center mx-2 mt-5 portfolio-container">
      {projects.map(project => {
        return <Project project={project}/>;
      })}
    </div>
	</div>
);
}

export default Portfolio