import React from 'react';
import {
	Card,
	CardTitle,
	CardBody,
	Button,
	CardText,
	Container
} from 'reactstrap';
import projects from '../shared/projects';

function Project() {
	return (
		<Container>
			<div className='m-5'>
				{projects.map((project) => (
					<Card key={project.id} color='info' className='m-5 text-center'>
						<CardBody>
							<CardTitle>{project.title}</CardTitle>
							<CardText>{project.description}</CardText>
							<Button>
								<a
									href={project.url}
									target='blank'
									style={{ textDecoration: 'none', color: 'white' }}
								>
									View Project
								</a>
							</Button>
						</CardBody>
					</Card>
				))}
			</div>
		</Container>
	);
}

export default Project;
