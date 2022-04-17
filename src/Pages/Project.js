import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import projects from '../shared/projects';
import { FadeIn } from '../components/Styles.style';

function Project() {
	return (
		<FadeIn>
			<Container className='align-items-center'>
				{projects.map((project) => (
					<Row
						className='align-items-center justify-content-center my-5'
						key={project.id}
					>
						<Col className='align-items-center justify-content-center m-2 col-sm-4'>
							<img
								src={project.image}
								alt='project'
								className='img-fluid align-items-center rounded mx-auto d-block'
							/>
							<div className='m-3'>
								<h1 className='text-center'>{project.title}</h1>
							</div>
						</Col>
						<Col className='col-sm'>
							<div className='text-center'>{project.description}</div>
							<div className='text-center mt-3'>
								<p>
									Technologies used: {''}
									{project.tech}
								</p>
							</div>
							<div className='text-center'>
								<Button className='m-2'>
									<a
										href={project.url}
										target='blank'
										style={{ textDecoration: 'none', color: 'white' }}
									>
										View Project
									</a>
								</Button>
								<Button className='m-2'>
									<a
										href={project.code}
										target='blank'
										style={{ textDecoration: 'none', color: 'white' }}
									>
										{' '}
										View Code
									</a>
								</Button>
							</div>
						</Col>
					</Row>
				))}
				<Row className='text-center my-5'>
					<Col className='col-sm-9 my-5'>
						<p>
							{' '}
							Feel free to view the source code for this website, in which I
							employed the use of React, React Hooks, React-Router-Dom,
							React-Animations, Styled Components, CSS and ReactStrap. The
							project component was set up with map() method to iterate over an
							array of objects.
						</p>
					</Col>
					<Col className='col-sm-3 my-5'>
						<Button className='m-2'>
							<a
								href='https://github.com/MLabreche9/projectWebsite'
								target='blank'
								style={{ textDecoration: 'none', color: 'white' }}
							>
								{' '}
								View Code
							</a>
						</Button>
					</Col>
				</Row>
			</Container>
		</FadeIn>
	);
}

export default Project;

// import React from 'react';
// import {
// 	Card,
// 	CardTitle,
// 	CardBody,
// 	Button,
// 	CardText,
// 	Container,
// 	CardImg,
// 	Row,
// 	Col,
// 	CardFooter
// } from 'reactstrap';
// import projects from '../shared/projects';

// function Project() {
// 	return (
// 		<Container className='align-items-center'>
// 			<Row className='align-items-center justify-content-center'>
// 				{projects.map((project) => (
// 					<Col className='align-items-center justify-content-center m-2'>
// 						<Card
// 							key={project.id}
// 							color='info'
// 							className=' mx-auto mb-3 text-center'
// 							style={{ width: '20rem', height: '30rem' }}
// 						>
// 							<CardImg
// 								src={project.image}
// 								alt='project image'
// 								className='img-fluid'
// 							/>

// 							<CardBody className=''>
// 								<CardTitle className='fs-4'>{project.title}</CardTitle>
// 								<CardText>{project.description}</CardText>
// 							</CardBody>
// 							<CardFooter className=''>
// 								<Button>
// 									<a
// 										href={project.url}
// 										target='blank'
// 										style={{ textDecoration: 'none', color: 'white' }}
// 									>
// 										View Project
// 									</a>
// 								</Button>
// 							</CardFooter>
// 						</Card>
// 					</Col>
// 				))}
// 			</Row>
// 		</Container>
// 	);
// }

// export default Project;
