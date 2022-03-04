import React from 'react';
import { Card } from 'reactstrap';
import projects from '../shared/projects';

function Project() {
	return (
		<div className='container wrapper'>
			<div className='row'>
				<div className='col md-4'>
					{projects.map((project) => (
						<div key={project.id} className='project_card'>
							<h3 className='card_title'>{project.title}</h3>
							<p className='card_description'>{project.description}</p>
							<button className='card_button'>View Project</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Project;
