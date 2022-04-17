import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Slide, FadeIn, Drop } from '../components/Styles.style';

function Home() {
	let navigate = useNavigate();
	return (
		<Container className='container-fluid'>
			<Row className='text-center'>
				<Col>
					<FadeIn>
						<h1 className='display-1 m-3'>Innovate.</h1>
						<h1 className='display-1 m-3'>Collaborate.</h1>
						<h1 className='display-1 m-3'>
							Create<Drop seconds='4s'>.</Drop>
						</h1>
					</FadeIn>
				</Col>
				<Col>
					<Slide seconds='2s'>
						<h1
							className='home-links'
							onClick={() => {
								navigate('/about');
							}}
						>
							About
						</h1>
					</Slide>

					<Slide seconds='2.5s'>
						<h1
							className='home-links'
							onClick={() => {
								navigate('/projects');
							}}
						>
							Projects
						</h1>
					</Slide>
					<Slide seconds='3s'>
						<h1
							className='home-links'
							onClick={() => {
								navigate('/contact');
							}}
						>
							Contact
						</h1>
					</Slide>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;

///////// First Version
// import React from 'react';
// import {
// 	Card,
// 	CardBody,
// 	CardTitle,
// 	Container,
// 	Row,
// 	Col,
// 	CardText,
// 	Button,
// 	CardDeck
// } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';

// function Home() {
// 	let navigate = useNavigate();

// 	return (
// 		<Container className='container-fluid'>
// 			<Row className='text-center m-5'>
// 				<h1>Welcome</h1>
// 			</Row>
// 			<CardDeck className=''>
// 				<Row className=' mt-5 flex-column flex-lg-row'>
// 					<Col>
// 						<Card body color='info' inverse className='text-center m-3 '>
// 							<CardBody>
// 								<CardTitle className='fs-3'>About Me</CardTitle>

// 								<CardText>
// 									Information about my work history, education and personal
// 									interests
// 								</CardText>

// 								<Button
// 									onClick={() => {
// 										navigate('/about');
// 									}}
// 								>
// 									View About
// 								</Button>
// 							</CardBody>
// 						</Card>
// 					</Col>
// 					<Col>
// 						<Card body color='info' inverse className='text-center m-3'>
// 							<CardBody>
// 								<CardTitle className='fs-3'>Projects</CardTitle>

// 								<CardText>
// 									A collection of projects using various technical skills
// 								</CardText>

// 								<Button
// 									onClick={() => {
// 										navigate('/projects');
// 									}}
// 								>
// 									View Projects
// 								</Button>
// 							</CardBody>
// 						</Card>
// 					</Col>
// 					<Col>
// 						<Card body color='info' inverse className='text-center m-3 '>
// 							<CardBody>
// 								<CardTitle className='fs-3'>Contact Me</CardTitle>
// 								<CardText>
// 									Contact information, including LinkedIn, Github and email
// 								</CardText>

// 								<Button
// 									onClick={() => {
// 										navigate('/contact');
// 									}}
// 								>
// 									Contact Me
// 								</Button>
// 							</CardBody>
// 						</Card>
// 					</Col>
// 				</Row>
// 			</CardDeck>
// 		</Container>
// 		//</div>
// 	);
// }

// export default Home;
