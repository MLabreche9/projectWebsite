import React from 'react';
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
	let navigate = useNavigate();

	return (
		//<div className='background'>
		<div className='container'>
			<div className='row text-center m-5'>
				<h1>Welcome</h1>
			</div>
			<div className='row my-auto justify-content-center align-items-center mt-5'>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-3'>
						<CardBody>
							<CardTitle>First Card</CardTitle>
							<CardSubtitle>First Card subtitle</CardSubtitle>
							<CardText>Some Card Text</CardText>
							<Button
								onClick={() => {
									navigate('/about');
								}}
							>
								About
							</Button>
						</CardBody>
					</Card>
				</div>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-3'>
						<CardBody>
							<CardTitle>Second Card</CardTitle>
							<CardSubtitle>First Card subtitle</CardSubtitle>
							<CardText>Some Card Text</CardText>
							<Button
								onClick={() => {
									navigate('/projects');
								}}
							>
								Projects
							</Button>
						</CardBody>
					</Card>
				</div>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-3'>
						<CardBody>
							<CardTitle>Third Card</CardTitle>
							<CardSubtitle>First Card subtitle</CardSubtitle>
							<CardText>Some Card Text</CardText>
							<Button
								onClick={() => {
									navigate('/contact');
								}}
							>
								Contact Me
							</Button>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
		//</div>
	);
}

export default Home;
