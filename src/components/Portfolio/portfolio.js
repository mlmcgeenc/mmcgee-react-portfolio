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
			tech: [],
		},
		{
			name: 'Project 2',
			screenshot: screenshot,
			link: null,
			tech: [],
		},
		{
			name: 'Project 3',
			screenshot: screenshot,
			link: null,
			tech: [],
		},
		{
			name: 'Project 4',
			screenshot: screenshot,
			link: null,
			tech: [],
		},
		{
			name: 'Project 5',
			screenshot: screenshot,
			link: null,
			tech: [],
		},
		{
			name: 'Project 6',
			screenshot: screenshot,
			link: null,
			tech: [],
		},
	];

return (
	<div className="container my-auto">
    <div className="row d-flex justify-content-center align-items-center col-12">
      {projects.map(project => {
        return <Project project={project}/>;
      })}
    </div>
	</div>
);
}

export default Portfolio