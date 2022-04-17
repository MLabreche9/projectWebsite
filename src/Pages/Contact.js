import React from 'react';
import { Card, CardTitle, CardBody, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from '../components/Styles.style';

function Contact() {
	return (
		<FadeIn>
			<Container>
				<Row className=' text-center m-5'>
					<h1>Let's Connect</h1>
				</Row>
				<Row>
					<Col className='col-sm'>
						<Card body color='secondary' inverse className='text-center m-5'>
							<CardBody>
								<CardTitle className='fs-2'>Github</CardTitle>
								<div>
									<a href='https://github.com/MLabreche9' target='blank'>
										<FontAwesomeIcon icon={faGithub} size='7x' color='white' />
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col className='col-sm'>
						<Card body color='secondary' inverse className='text-center m-5'>
							<CardBody>
								<CardTitle className='fs-2'>LinkedIn</CardTitle>
								<div>
									<a
										href='https://www.linkedin.com/in/meghan-labreche'
										target='blank'
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											size='7x'
											color='white'
										/>
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col className='col-sm'>
						<Card body color='secondary' inverse className='text-center m-5'>
							<CardBody>
								<CardTitle className='fs-2'>Email</CardTitle>
								<div>
									<a href='mailto:mvlabreche@gmail.com' target='blank'>
										<FontAwesomeIcon
											icon={faEnvelope}
											size='7x'
											color='white'
										/>
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</FadeIn>
	);
}

export default Contact;

///////// First Version
// import React from 'react';
// import { Card, CardTitle, CardBody, Container, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// function Contact() {
// 	return (
// 		<Container>
// 			<Row className=' text-center m-5'>
// 				<h1>Let's Connect</h1>
// 			</Row>
// 			<Row>
// 				<Col className='col-sm'>
// 					<Card body color='info' inverse className='text-center m-5'>
// 						<CardBody>
// 							<CardTitle className='fs-2'>Github</CardTitle>
// 							<div>
// 								<a href='https://github.com/MLabreche9' target='blank'>
// 									<FontAwesomeIcon icon={faGithub} size='7x' color='white' />
// 								</a>
// 							</div>
// 						</CardBody>
// 					</Card>
// 				</Col>
// 				<Col className='col-sm'>
// 					<Card body color='info' inverse className='text-center m-5'>
// 						<CardBody>
// 							<CardTitle className='fs-2'>LinkedIn</CardTitle>
// 							<div>
// 								<a
// 									href='https://www.linkedin.com/in/meghan-labreche'
// 									target='blank'
// 								>
// 									<FontAwesomeIcon icon={faLinkedin} size='7x' color='white' />
// 								</a>
// 							</div>
// 						</CardBody>
// 					</Card>
// 				</Col>
// 				<Col className='col-sm'>
// 					<Card body color='info' inverse className='text-center m-5'>
// 						<CardBody>
// 							<CardTitle className='fs-2'>Email</CardTitle>
// 							<div>
// 								<a href='mailto:mvlabreche@gmail.com' target='blank'>
// 									<FontAwesomeIcon icon={faEnvelope} size='7x' color='white' />
// 								</a>
// 							</div>
// 						</CardBody>
// 					</Card>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// }

// export default Contact;
