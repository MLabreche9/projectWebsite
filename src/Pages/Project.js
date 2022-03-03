import React from 'react';
import { Card } from 'reactstrap';
import projects from '../shared/projects';

function Project() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col md-4'></div>
				{projects.map((project) => (
					<div key={project.id}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Project;
