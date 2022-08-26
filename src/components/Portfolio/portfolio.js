import React from "react";
import 'bootstrap'
import '../../Assets/css/custom.css'
import Project from '../Project/project'

const Portfolio = () => {
  const projects = [
		{
			name: 'Project 1',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
		{
			name: 'Project 2',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
		{
			name: 'Project 3',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
		{
			name: 'Project 4',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
		{
			name: 'Project 5',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
		{
			name: 'Project 6',
			screenshot: null,
			githubLink: null,
			techStack: [],
		},
	];

return (
	<div>
    <h1>Portfolio</h1>
    <ul>
      {projects.map(project => {
        return <Project project={project}/>;
      })}
    </ul>
	</div>
);
}

export default Portfolio