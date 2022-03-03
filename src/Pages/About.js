import React, { useState } from 'react';
import { Button, Collapse, List } from 'reactstrap';

function About() {
	const [workIsOpen, setWorkIsOpen] = useState(false);
	const [playIsOpen, setPlayIsOpen] = useState(false);

	return (
		<div className='container'>
			<div className='row text-center m-5'>
				<h1> A Little bit about me</h1>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<Button
						color='info'
						onClick={() => {
							setWorkIsOpen(!workIsOpen);
						}}
					>
						Work Hard
					</Button>
					<Collapse isOpen={workIsOpen}>
						<div className='row mt-5'>
							<h3>Education</h3>
							<List>
								<ul>
									<li>
										<h4>Nucamp Coding Bootcamp</h4>
										<ul>
											<li>
												Full stack Web and Mobile App Developer Bootcamp | 2021
											</li>
											<li>
												Bootcamp with a focus on Boostrap, React, React Native,
												NodeKS, ExpressJS and MongoDB
											</li>
											<li>
												Developed applications from start to finish including
												how to structure code and application logic
											</li>
										</ul>
									</li>
									<li>
										<h4>Udemy</h4>
										<ul>
											<li>
												The Complete Javascript Course 2021: From Zero to Expert
												| 2021
											</li>
											<li>
												React-The Complete Guide(incl Hooks, React Router,
												Redux) | 2021
											</li>
											<li>The Complete React Native + hooks Course | 2021</li>
										</ul>
									</li>
								</ul>
							</List>
						</div>
						<div>
							<h3> My Skills include the following:</h3>
							<div className='row'>
								<div className='col'>
									<ul>
										<li>Html</li>
										<li>CSS</li>
										<li>Javascript</li>
									</ul>
								</div>
								<div className='col'>
									<ul>
										<li>Bootstrap</li>
										<li>React</li>
										<li>React Native</li>
									</ul>
								</div>
								<div className='col'>
									<ul>
										<li>Redux</li>
										<li>Node.js</li>
										<li>Express.js</li>
									</ul>
								</div>
								<div className='col'>
									<ul>
										<li>MongoDB</li>
										<li>Mongoose</li>
										<li>NPM</li>
									</ul>
								</div>
								<div className='col'>
									<ul>
										<li>VS Code</li>
										<li>Git/Github</li>
										<li>Postman</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='row'>
							<h3>Professional Experience</h3>
							<List>
								<ul>
									<h4>Gemological Institute of America</h4>
									<h5>
										<i>Quality Specialist</i> July 2013-Present
									</h5>
									<ul>
										<li>
											responsibilities include monitoring and analyzing the
											output of our facilities product
										</li>
										<li>
											For the past two years my team has worked closely with
											research and development to train an artifical
											intelligence program to assist in our productivity and
											quality. My role was to collect data and provide feedback
											to help develop instrumentation and a workflow process
										</li>
										<li>
											The results of this process are in the testing phase and
											will be roled out globally Spring of 2022, I am leading
											and training teams to implement this process
										</li>
										<li>
											From 2014-2016 I worked with training and development. I
											developed training materials and led new hire groups
											consisting of 30+ people, training new hires on proper
											policies, procedures and processes by giving
											presentations, feedback, and leading hands on training
										</li>
									</ul>
								</ul>
							</List>
						</div>
					</Collapse>
				</div>
				<div className='col-sm'>
					<Button
						color='info'
						onClick={() => {
							setPlayIsOpen(!playIsOpen);
						}}
					>
						Play Hard
					</Button>
					<Collapse isOpen={playIsOpen}>
						<div className='row mt-5'>
							<p>
								My other full time job is being a mom of two. While I used to
								swim competively and play on soccer teams myself, these days my
								time consists of going to soccer practice and swimming lessons.
								When we are not running around handling daily activities, we
								like to spend time together outside, whether it be the beach,
								park, or zoo
							</p>
							<p>
								In the free time I do find, I love to read, usually tackling
								whatever is on the NY Times bestseller list at the moment. I
								find time to listen to podcasts - my favorite topics are
								personal finance, economics and True Crime.
							</p>
						</div>
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default About;
