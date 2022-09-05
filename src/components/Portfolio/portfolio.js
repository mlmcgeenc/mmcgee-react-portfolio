import React from "react";
import 'bootstrap'
import '../../Assets/css/custom.css'
import Project from '../Project/project'
import screenshot from '../../Assets/images/screenshots/demo-screenshot.png'
import localMusicScene from '../../Assets/images/screenshots/local-music-scene-screenshot.png'
import ezStream from '../../Assets/images/screenshots/ez-stream-screenshot.png';
import codeQuiz from '../../Assets/images/screenshots/code-quiz-screenshot.png';
import weatherDashboard from '../../Assets/images/screenshots/weather-dashboard-screenshot.png';
import simplePortfolio from '../../Assets/images/screenshots/simple-portfolio-screenshot.png';
import employeeTracker from '../../Assets/images/screenshots/employee-tracker-screenshot.png';

const Portfolio = () => {
  const projects = [
		{
			name: 'Local Music Scene',
			screenshot: localMusicScene,
			repoLink: 'https://github.com/cpm-128/local-music-scene',
			deployedLink: 'https://damp-plateau-16490.herokuapp.com/',
			tech: [
				'html',
				'css',
				'javascript',
				'node',
				'express',
				'mysql',
				'sequelize',
				'handlebars',
			],
		},
		{
			name: 'EZ Stream',
			screenshot: ezStream,
			repoLink: 'https://github.com/mlmcgeenc/group-2-project-one',
			deployedLink: 'https://mlmcgeenc.github.io/group-2-project-one/',
			tech: ['html', 'css', 'javascript', 'foundation'],
		},
		{
			name: 'Code Quiz',
			screenshot: codeQuiz,
			repoLink: 'https://github.com/mlmcgeenc/js-quiz',
			deployedLink: 'https://mlmcgeenc.github.io/js-quiz/',
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Weather Dashboard',
			screenshot: weatherDashboard,
			repoLink: 'https://github.com/mlmcgeenc/weather-dashboard',
			deployedLink: 'https://mlmcgeenc.github.io/weather-dashboard/',
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Simple Portfolio',
			screenshot: simplePortfolio,
			repoLink: 'https://github.com/mlmcgeenc/class-portfolio',
			deployedLink: 'https://mlmcgeenc.github.io/class-portfolio/',
			tech: ['html', 'css'],
		},
		{
			name: 'Employee Tracker',
			screenshot: employeeTracker,
			repoLink: 'https://github.com/mlmcgeenc/employee-tracker',
			deployedLink: null,
			tech: ['javascript', 'node'],
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