import React from 'react';
import {
	Card,
	CardTitle,
	CardBody,
	Button,
	CardText,
	Container,
	CardImg,
	Row,
	Col,
	CardFooter
} from 'reactstrap';
import projects from '../shared/projects';

function Project() {
	return (
		<Container className='align-items-center'>
			<Row className='align-items-center justify-content-center'>
				{projects.map((project) => (
					<Col className='align-items-center justify-content-center m-2'>
						<Card
							key={project.id}
							color='info'
							className=' mx-auto mb-3 text-center'
							style={{ width: '20rem', height: '30rem' }}
						>
							<CardImg
								src={project.image}
								alt='project image'
								className='img-fluid'
							/>

							<CardBody className=''>
								<CardTitle className='fs-4'>{project.title}</CardTitle>
								<CardText>{project.description}</CardText>
							</CardBody>
							<CardFooter className=''>
								<Button>
									<a
										href={project.url}
										target='blank'
										style={{ textDecoration: 'none', color: 'white' }}
									>
										View Project
									</a>
								</Button>
							</CardFooter>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Project;
