import React from 'react';
import {
	Card,
	CardBody,
	CardTitle,
	Container,
	Row,
	Col,
	CardText,
	Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
	let navigate = useNavigate();

	return (
		//<div className='background'>
		<Container>
			<Row className='text-center m-5'>
				<h1>Welcome</h1>
			</Row>
			<Row className='my-auto justify-content-center align-items-center mt-5'>
				<Col className='col-sm'>
					<Card body color='info' inverse className='text-center m-3'>
						<CardBody>
							<CardTitle className='fs-3'>About Me</CardTitle>

							<CardText>
								Information about my work history, education and personal
								interests
							</CardText>
							<Button
								onClick={() => {
									navigate('/about');
								}}
							>
								View About
							</Button>
						</CardBody>
					</Card>
				</Col>
				<Col className='col-sm'>
					<Card body color='info' inverse className='text-center m-3'>
						<CardBody>
							<CardTitle className='fs-3'>Projects</CardTitle>

							<CardText>
								A collection of projects using various technical skills
							</CardText>
							<Button
								onClick={() => {
									navigate('/projects');
								}}
							>
								View Projects
							</Button>
						</CardBody>
					</Card>
				</Col>
				<Col className='col-sm'>
					<Card body color='info' inverse className='text-center m-3 '>
						<CardBody>
							<CardTitle className='fs-3'>Contact Me</CardTitle>
							<CardText>
								Contact information, including LinkedIn, Github and an email
								contact
							</CardText>
							<Button
								onClick={() => {
									navigate('/contact');
								}}
							>
								Contact Me
							</Button>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
		//</div>
	);
}

export default Home;
