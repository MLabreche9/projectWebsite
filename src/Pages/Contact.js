import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div className='container'>
			<div className='row text-center m-5'>
				<h1>Let's Connect</h1>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-5'>
						<CardBody>
							<CardTitle>Github</CardTitle>
							<div>
								<a href='https://github.com/MLabreche9' target='blank'>
									<FontAwesomeIcon icon={faGithub} size='7x' color='white' />
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-5'>
						<CardBody>
							<CardTitle>LinkedIn</CardTitle>
							<div>
								<a
									href='https://www.linkedin.com/in/meghan-labreche'
									target='blank'
								>
									<FontAwesomeIcon icon={faLinkedin} size='7x' color='white' />
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className='col-sm'>
					<Card body color='info' inverse className='text-center m-5'>
						<CardBody>
							<CardTitle>Email</CardTitle>
							<div>
								<a href='mailto:mvlabreche@gmail.com' target='blank'>
									<FontAwesomeIcon icon={faEnvelope} size='7x' color='white' />
								</a>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Contact;
