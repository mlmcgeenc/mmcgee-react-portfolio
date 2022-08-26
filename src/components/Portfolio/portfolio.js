import React from "react";
import 'bootstrap'
import '../../Assets/css/custom.css'
import Project from '../Project/project'
import screenshot from '../../Assets/images/screenshots/demo-screenshot.png'

const Portfolio = () => {
  const projects = [
		{
			name: 'Project 1',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Project 2',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Project 3',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Project 4',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Project 5',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
		{
			name: 'Project 6',
			screenshot: screenshot,
			link: null,
			tech: ['html', 'css', 'javascript'],
		},
	];

return (
	<div className="container">
    <div className="row d-flex justify-content-center align-items-center col-12 mt-5">
      {projects.map(project => {
        return <Project project={project}/>;
      })}
    </div>
	</div>
);
}

export default Portfolio