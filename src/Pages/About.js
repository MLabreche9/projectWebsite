import React, { useState } from 'react';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col,
	Container,
	List
} from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartColumn,
	faChalkboardUser,
	faGem
} from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from '../components/Styles.style';

function About() {
	// State for active Tab
	const [activeTab, setActiveTab] = useState('');

	// Toggle active state for Tab
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<FadeIn>
			<Container>
				<Row className='text-center'>
					<h1> A Little Bit About Me</h1>
				</Row>
				<Nav
					tabs
					className='justify-content-center align-items-center flex-column flex-sm-row'
				>
					<NavItem className='about_link'>
						<NavLink
							className={classnames({
								active: activeTab === '1'
							})}
							style={{
								textDecoration: 'none',
								color: 'rgb(226, 89, 39)',
								fontSize: '1.25em'
							}}
							onClick={() => {
								toggle('1');
							}}
						>
							Education
						</NavLink>
					</NavItem>
					<NavItem className='about_link'>
						<NavLink
							className={classnames({ active: activeTab === '2' })}
							style={{
								textDecoration: 'none',
								color: 'rgb(226, 89, 39)',
								fontSize: '1.25em'
							}}
							onClick={() => {
								toggle('2');
							}}
						>
							Skills
						</NavLink>
					</NavItem>
					<NavItem className='about_link'>
						<NavLink
							className={classnames({ active: activeTab === '3' })}
							style={{
								textDecoration: 'none',
								color: 'rgb(226, 89, 39)',
								fontSize: '1.25em'
							}}
							onClick={() => {
								toggle('3');
							}}
						>
							Occupation
						</NavLink>
					</NavItem>
					<NavItem className='about_link'>
						<NavLink
							className={classnames({ active: activeTab === '4' })}
							style={{
								textDecoration: 'none',
								color: 'rgb(226, 89, 39)',
								fontSize: '1.25em'
							}}
							onClick={() => {
								toggle('4');
							}}
						>
							Interests
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={activeTab}>
					{/* --------------Education------------------- */}
					<TabPane tabId='1'>
						<Row className='my-5 text-center'>
							<h5 className='word'>Nucamp Coding Bootcamp</h5>
							<p>
								<i>Full stack Web and Mobile App Developer Bootcamp | 2021</i>
							</p>
							<p>
								Bootcamp with a focus on Boostrap, React, React Native, NodeJS,
								ExpressJS and MongoDB
							</p>
							<p>
								Developed applications from start to finish including how to
								structure code and application logic
							</p>
						</Row>
						<Row className='my-5 text-center'>
							<h5 className='word'>Udemy</h5>
							<p>
								The Complete Javascript Course 2021: From Zero to Expert | 2021
							</p>
							<p>
								React-The Complete Guide(incl Hooks, React Router, Redux) | 2021
							</p>
							<p>The Complete React Native + hooks Course | 2021</p>
							<p>
								Node.js, Express, MongoDB and More: The Complete Bootcamp | 2022
							</p>
						</Row>
						<Row className='my-5 text-center'>
							<h5 className='word'>
								State University of New York, Purchase College
							</h5>
							<p>B.A. History | 2006</p>
						</Row>
					</TabPane>
					{/* --------------------------SKILLS--------------------------- */}
					<TabPane tabId='2'>
						<Row className='my-3'>
							<Col className='text-center'>
								<h4 className='my-3 word'> My Skills include the following:</h4>
								<p>Languages: JavaScript, HTML, CSS</p>
								<p>
									Frameworks: React, React Native, Node, Express, Bootstrap,
									Redux
								</p>
								<p>Databases: Mongoose, MongoDB</p>
								<p>Tools: VS Code, Git, Github, Postman, Terminal, Compass</p>
								<p>
									Soft Skills: Teamwork, Collaboration, Analytical,
									Detail-orientated
								</p>
							</Col>
						</Row>
						{/* -------------------------- Professional Experience ------------------------- */}
					</TabPane>
					<TabPane tabId='3'>
						<Container>
							<Row className='my-3'>
								<h4 className='text-center'>
									{' '}
									I have worked at the Gemological Institute of America since
									2013, and have held many roles
								</h4>
							</Row>
							<Row>
								<h5 className='text-center mb-4'>
									Throughout my career I have developed many valuable skills.
									Through <span className='word'>Collaboration</span> with my
									teammates, we have analyzed data and targeted trends to
									improve the <span className='word'>Quality</span> of our
									output. I have the ability to{' '}
									<span className='word'>Lead</span> teams and{' '}
									<span className='word'>Manage</span> projects, developing
									curriculums and implementing training.
								</h5>
							</Row>
							<Row className='align-middle my-5'>
								<Col className='col-sm'>
									<List>
										<p className='mt-2 text-center'>
											<i>Quality Specialist</i> | May 2016-Present
										</p>
										<ul>
											<li>
												Monitored the quality of the company’s product through
												various systems of observation and analyzation. Created
												and implemented blind controls, examined existing
												reports for errors and detail, assessed parameters at
												client requests, and studied data to target trends and
												develop solutions
											</li>
											<li>
												Provided regular updates to team leadership on quality
												metrics by communicating consistency problems or
												production deficiencies
											</li>
											<li>
												Collaborated on site with local teams in Johannesburg,
												South Africa (2016), and New York City, New York (2019)
												to discuss and improve global alignment.
											</li>
											<li>
												Collaborated as a member of a specialized team to
												collect data and offer feedback to develop targeted
												instrumentation and software to improve the quality
												output of our product. As the process was developed I
												would perform quality assurance assistance to test the
												product through various stages. As the workflow process
												was implemented, I led training to additional teams
												throughout the company.{' '}
												{/* <br>
												Read the press release{' '}
												<a
													href='https://www.ibm.com/case-studies/gemological-institute-of-america/'
													target='blank'
												>
													here
												</a>
											</br> */}
											</li>
										</ul>
									</List>
								</Col>
								<Col className='col-sm d-inline-block text-center m-auto'>
									<FontAwesomeIcon
										icon={faChartColumn}
										size='10x'
										color='white'
									/>
								</Col>
							</Row>
							<Row className=''>
								<Col className='col-sm d-inline-block text-center m-auto'>
									<FontAwesomeIcon
										icon={faChalkboardUser}
										size='10x'
										color='white'
									/>
								</Col>
								<Col className='col-sm'>
									<p className='mt-3 text-center'>
										<i>Training Specialist</i> | July 2014-April 2016
									</p>
									<List>
										<ul>
											<li>
												Led and worked with teams to train consecutive new hire
												groups consisting of 30+ people in California, India and
												Africa to instill proper methods of diamond grading and
												company procedures
											</li>
											<li>
												Working with Training and Development I collaborated to
												produce training materials, led presentations and
												training exercises, and provided hands on training to
												foster the development of our new hires and entry level
												employees
											</li>
											<li>
												Designed and facilitated training courses, aligning new
												learning development and solutions to organization’s
												strategic goals, mission and vision
											</li>
											<li>
												August 2014-October 2014, traveled and assisted in
												training new hire groups in Mumbai, India. Helped
												develop the first iteration of digital training for new
												hires.
											</li>
											<li>
												April 2015-June 2015 traveled and led a new hire group
												in Gaborone, Botswana, Africa. As lead trainer I managed
												the daily and weekly lesson plans, collaborated with
												local assistant trainers on the daily workflow and
												guided the progress of new hires to successful
												completion.
											</li>
										</ul>
									</List>
								</Col>
							</Row>
							<Row className='my-5 pb-5'>
								<Col className='col-sm'>
									<p className='mt-3 text-center'>
										<i>Staff Gemologist</i> | July 2013-June 2014
									</p>
									<List>
										<ul>
											<li>
												Consistently met and exceeded daily productivity numbers
												for providing detailed diamond grading reports
											</li>
										</ul>
									</List>
								</Col>
								<Col className='col-sm d-inline-block text-center m-auto'>
									<FontAwesomeIcon icon={faGem} size='10x' color='white' />
								</Col>
							</Row>
						</Container>
					</TabPane>
					{/* ------------------------INTERESTS------------------------------ */}
					<TabPane tabId='4'>
						<Row className='my-5'>
							<Col className='col-sm text-center'>
								<p>
									{' '}
									In the free time I do find, I love to read, usually tackling
									whatever is on the NY Times bestseller list at the moment. I
									find time to listen to podcasts - my favorite topics are
									personal finance, economics and True Crime. RadioLab, Crime
									Junkies, and Planet Money are in the weekly rotation.
								</p>
								<p>
									My other full time job is being a mom of two. While I used to
									swim competively and play on soccer teams myself, these days
									my time consists of going to soccer practice and swimming
									lessons. When we are not running around handling daily
									activities, we like to spend time together outside, whether it
									be the beach, park, or zoo{' '}
								</p>
							</Col>
							<Col className='col-sm text-center align-middle'>
								{/* <Row>
								<Col className='d-inline-block text-center m-auto'>
									<img
										src='./gc_pic.png'
										alt='grand canyon pic'
										className='img-fluid rounded-circle'
										width='200px'
										height='auto'
									/>
								</Col>
								<Col className='d-inline-block text-center m-auto'>
									<img
										src='./waterfall_pic.png'
										alt='victoria falls pic'
										className='img-fluid rounded-circle'
										width='200px'
										height='auto'
									/>
								</Col>
							</Row> */}

								<img
									src='./selfied_pic.png'
									alt='selfie pic'
									className=' rounded-circle'
									width='250 em'
									height='auto'
								/>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</Container>
		</FadeIn>
	);
}

export default About;

///////////////////////First Version
// import React, { useState } from 'react';
// import {
// 	TabContent,
// 	TabPane,
// 	Nav,
// 	NavItem,
// 	NavLink,
// 	Row,
// 	Col,
// 	Container,
// 	List
// } from 'reactstrap';
// import classnames from 'classnames';

// function About() {
// 	// State for active Tab
// 	const [activeTab, setActiveTab] = useState('');

// 	// Toggle active state for Tab
// 	const toggle = (tab) => {
// 		if (activeTab !== tab) setActiveTab(tab);
// 	};

// 	return (
// 		<Container>
// 			<Row className='text-center m-5'>
// 				<h1> A Little Bit About Me</h1>
// 			</Row>
// 			<Nav
// 				tabs
// 				className='justify-content-center align-items-center flex-column flex-sm-row'
// 			>
// 				<NavItem>
// 					<NavLink
// 						className={classnames({
// 							active: activeTab === '1'
// 						})}
// 						style={{ textDecoration: 'none', color: '#a4ffbb' }}
// 						onClick={() => {
// 							toggle('1');
// 						}}
// 					>
// 						Education
// 					</NavLink>
// 				</NavItem>
// 				<NavItem>
// 					<NavLink
// 						className={classnames({ active: activeTab === '2' })}
// 						style={{ textDecoration: 'none', color: '#a4ffbb' }}
// 						onClick={() => {
// 							toggle('2');
// 						}}
// 					>
// 						Skills
// 					</NavLink>
// 				</NavItem>
// 				<NavItem>
// 					<NavLink
// 						className={classnames({ active: activeTab === '3' })}
// 						style={{ textDecoration: 'none', color: '#a4ffbb' }}
// 						onClick={() => {
// 							toggle('3');
// 						}}
// 					>
// 						Occupation
// 					</NavLink>
// 				</NavItem>
// 				<NavItem>
// 					<NavLink
// 						className={classnames({ active: activeTab === '4' })}
// 						style={{ textDecoration: 'none', color: '#a4ffbb' }}
// 						onClick={() => {
// 							toggle('4');
// 						}}
// 					>
// 						Interests
// 					</NavLink>
// 				</NavItem>
// 			</Nav>
// 			<TabContent activeTab={activeTab}>
// 				<TabPane tabId='1'>
// 					<Row className='my-3'>
// 						<Col>
// 							<h4>Education</h4>
// 							<List>
// 								<ul>
// 									<li>
// 										<h5>Nucamp Coding Bootcamp</h5>
// 										<ul>
// 											<li>
// 												Full stack Web and Mobile App Developer Bootcamp | 2021
// 											</li>
// 											<li>
// 												Bootcamp with a focus on Boostrap, React, React Native,
// 												NodeKS, ExpressJS and MongoDB
// 											</li>
// 											<li>
// 												Developed applications from start to finish including
// 												how to structure code and application logic
// 											</li>
// 										</ul>
// 									</li>
// 									<li>
// 										<h5>Udemy</h5>
// 										<ul>
// 											<li>
// 												The Complete Javascript Course 2021: From Zero to Expert
// 												| 2021
// 											</li>
// 											<li>
// 												React-The Complete Guide(incl Hooks, React Router,
// 												Redux) | 2021
// 											</li>
// 											<li>The Complete React Native + hooks Course | 2021</li>
// 										</ul>
// 									</li>
// 									<li>
// 										<h5>State University of New York, Purchase College</h5>
// 										<ul>
// 											<li>B.A. History | 2006</li>
// 										</ul>
// 									</li>
// 								</ul>
// 							</List>
// 						</Col>
// 					</Row>
// 				</TabPane>
// 				<TabPane tabId='2'>
// 					<Row className='my-3'>
// 						<Col>
// 							<h4> My Skills include the following:</h4>
// 							<div className='row'>
// 								<div className='col'>
// 									<ul>
// 										<li>Html</li>
// 										<li>CSS</li>
// 										<li>Javascript</li>
// 									</ul>
// 								</div>
// 								<div className='col'>
// 									<ul>
// 										<li>Bootstrap</li>
// 										<li>React</li>
// 										<li>React Native</li>
// 									</ul>
// 								</div>
// 								<div className='col'>
// 									<ul>
// 										<li>Redux</li>
// 										<li>Node.js</li>
// 										<li>Express.js</li>
// 									</ul>
// 								</div>
// 								<div className='col'>
// 									<ul>
// 										<li>MongoDB</li>
// 										<li>Mongoose</li>
// 										<li>NPM</li>
// 									</ul>{' '}
// 								</div>
// 								<div className='col'>
// 									<ul>
// 										<li>VS Code</li>
// 										<li>Git/Github</li>
// 										<li>Postman</li>
// 									</ul>
// 								</div>
// 							</div>
// 						</Col>
// 					</Row>
// 				</TabPane>
// 				<TabPane tabId='3'>
// 					<Row className='my-3'>
// 						<Col>
// 							<h4>Professional Experience</h4>
// 							<List>
// 								<ul>
// 									<h5>Gemological Institute of America</h5>
// 									<p className='mt-2'>
// 										<i>Quality Specialist</i> May 2016-Present
// 									</p>
// 									<ul>
// 										<li>
// 											Monitored the quality of the company’s product through
// 											various systems of observation and analyzation. Created
// 											and implemented blind controls, examined existing reports
// 											for errors and detail, assessed parameters at client
// 											requests, and studied data to target trends and develop
// 											solutions
// 										</li>
// 										<li>
// 											Collaborated on site with local teams in Johannesburg,
// 											South Africa (2016), and New York City, New York (2019) to
// 											discuss and improve global alignment.
// 										</li>
// 										<li>
// 											Collaborated as a member of a specialized team to collect
// 											data and offer feedback to develop targeted
// 											instrumentation and software to improve the quality output
// 											of our product. As the process was developed I would
// 											perform quality assurance assistance to test the product
// 											through various stages. As the workflow process was
// 											implemented, I led training to additional teams throughout
// 											the company.{' '}
// 											{/* <br>
// 												Read the press release{' '}
// 												<a
// 													href='https://www.ibm.com/case-studies/gemological-institute-of-america/'
// 													target='blank'
// 												>
// 													here
// 												</a>
// 											</br> */}
// 										</li>
// 									</ul>
// 									<p className='mt-3'>
// 										<i>Training Specialist</i> July 2014-April 2016
// 									</p>
// 									<ul>
// 										<li>
// 											Led and worked with teams to train consecutive new hire
// 											groups consisting of 30+ people in California, India and
// 											Africa to instill proper methods of diamond grading and
// 											company procedures
// 										</li>
// 										<li>
// 											Working with Training and Development I collaborated to
// 											produce training materials, led presentations and training
// 											exercises, and provided hands on training to foster the
// 											development of our new hires and entry level employees
// 										</li>
// 										<li>
// 											August 2014-October 2014, traveled and assisted in
// 											training new hire groups in Mumbai, India. Helped develop
// 											the first iteration of digital training for new hires.
// 										</li>
// 										<li>
// 											April 2015-June 2015 traveled and led a new hire group in
// 											Gaborone, Botswana, Africa. As lead trainer I managed the
// 											daily and weekly lesson plans, collaborated with local
// 											assistant trainers on the daily workflow and guided the
// 											progress of new hires to successful completion.
// 										</li>
// 									</ul>
// 									<p className='mt-3'>
// 										<i>Staff Gemologist</i> July 2013-June 2014
// 									</p>
// 									<ul>
// 										<li>
// 											Consistently met and exceeded daily productivity numbers
// 											for providing detailed diamond grading reports
// 										</li>
// 									</ul>
// 								</ul>
// 							</List>
// 						</Col>
// 					</Row>
// 				</TabPane>
// 				<TabPane tabId='4'>
// 					<Row className='my-3'>
// 						<Col>
// 							<p>
// 								{' '}
// 								In the free time I do find, I love to read, usually tackling
// 								whatever is on the NY Times bestseller list at the moment. I
// 								find time to listen to podcasts - my favorite topics are
// 								personal finance, economics and True Crime. RadioLab, Crime
// 								Junkies, and Planet Money are in the weekly rotation.
// 							</p>
// 							<p>
// 								My other full time job is being a mom of two. While I used to
// 								swim competively and play on soccer teams myself, these days my
// 								time consists of going to soccer practice and swimming lessons.
// 								When we are not running around handling daily activities, we
// 								like to spend time together outside, whether it be the beach,
// 								park, or zoo{' '}
// 							</p>
// 						</Col>
// 					</Row>
// 				</TabPane>
// 			</TabContent>
// 		</Container>
// 	);
// }

// export default About;

// // function About() {
// // 	const [workIsOpen, setWorkIsOpen] = useState(false);
// // 	const [playIsOpen, setPlayIsOpen] = useState(false);

// // 	return (
// // 		<Container>
// // 			<Row className='text-center m-5'>
// // 				<h1> A Little bit about me</h1>
// // 			</Row>
// // 			<Row>
// // 				<Col className='col-sm'>
// // 					<Button
// // 						color='info'
// // 						onClick={() => {
// // 							setWorkIsOpen(!workIsOpen);
// // 						}}
// // 					>
// // 						Work Hard
// // 					</Button>
// // 					<Collapse isOpen={workIsOpen}>
// // 						<div className='row mt-5'>
// // 							<h3>Education</h3>
// // 							<List>
// // 								<ul>
// // 									<li>
// // 										<h4>Nucamp Coding Bootcamp</h4>
// // 										<ul>
// // 											<li>
// // 												Full stack Web and Mobile App Developer Bootcamp | 2021
// // 											</li>
// // 											<li>
// // 												Bootcamp with a focus on Boostrap, React, React Native,
// // 												NodeKS, ExpressJS and MongoDB
// // 											</li>
// // 											<li>
// // 												Developed applications from start to finish including
// // 												how to structure code and application logic
// // 											</li>
// // 										</ul>
// // 									</li>
// // 									<li>
// // 										<h4>Udemy</h4>
// // 										<ul>
// // 											<li>
// // 												The Complete Javascript Course 2021: From Zero to Expert
// // 												| 2021
// // 											</li>
// // 											<li>
// // 												React-The Complete Guide(incl Hooks, React Router,
// // 												Redux) | 2021
// // 											</li>
// // 											<li>The Complete React Native + hooks Course | 2021</li>
// // 										</ul>
// // 									</li>
// // 								</ul>
// // 							</List>
// // 						</div>
// // 						<div>
// // 							<h3> My Skills include the following:</h3>
// // 							<div className='row'>
// // 								<div className='col'>
// // 									<ul>
// // 										<li>Html</li>
// // 										<li>CSS</li>
// // 										<li>Javascript</li>
// // 									</ul>
// // 								</div>
// // 								<div className='col'>
// // 									<ul>
// // 										<li>Bootstrap</li>
// // 										<li>React</li>
// // 										<li>React Native</li>
// // 									</ul>
// // 								</div>
// // 								<div className='col'>
// // 									<ul>
// // 										<li>Redux</li>
// // 										<li>Node.js</li>
// // 										<li>Express.js</li>
// // 									</ul>
// // 								</div>
// // 								<div className='col'>
// // 									<ul>
// // 										<li>MongoDB</li>
// // 										<li>Mongoose</li>
// // 										<li>NPM</li>
// // 									</ul>
// // 								</div>
// // 								<div className='col'>
// // 									<ul>
// // 										<li>VS Code</li>
// // 										<li>Git/Github</li>
// // 										<li>Postman</li>
// // 									</ul>
// // 								</div>
// // 							</div>
// // 						</div>
// // 						<div className='row'>
// // 							<h3>Professional Experience</h3>
// // 							<List>
// // 								<ul>
// // 									<h4>Gemological Institute of America</h4>
// // 									<h5>
// // 										<i>Quality Specialist</i> July 2013-Present
// // 									</h5>
// // 									<ul>
// // 										<li>
// // 											responsibilities include monitoring and analyzing the
// // 											output of our facilities product
// // 										</li>
// // 										<li>
// // 											For the past two years my team has worked closely with
// // 											research and development to train an artifical
// // 											intelligence program to assist in our productivity and
// // 											quality. My role was to collect data and provide feedback
// // 											to help develop instrumentation and a workflow process
// // 										</li>
// // 										<li>
// // 											The results of this process are in the testing phase and
// // 											will be roled out globally Spring of 2022, I am leading
// // 											and training teams to implement this process
// // 										</li>
// // 										<li>
// // 											From 2014-2016 I worked with training and development. I
// // 											developed training materials and led new hire groups
// // 											consisting of 30+ people, training new hires on proper
// // 											policies, procedures and processes by giving
// // 											presentations, feedback, and leading hands on training
// // 										</li>
// // 									</ul>
// // 								</ul>
// // 							</List>
// // 						</div>
// // 					</Collapse>
// // 				</Col>
// // 				<Col className='col-sm'>
// // 					<Button
// // 						color='info'
// // 						onClick={() => {
// // 							setPlayIsOpen(!playIsOpen);
// // 						}}
// // 					>
// // 						Play Hard
// // 					</Button>
// // 					<Collapse isOpen={playIsOpen}>
// // 						<div className='row mt-5'>
// // 							<p>
// // 								My other full time job is being a mom of two. While I used to
// // 								swim competively and play on soccer teams myself, these days my
// // 								time consists of going to soccer practice and swimming lessons.
// // 								When we are not running around handling daily activities, we
// // 								like to spend time together outside, whether it be the beach,
// // 								park, or zoo
// // 							</p>
// // 							<p>
// // 								In the free time I do find, I love to read, usually tackling
// // 								whatever is on the NY Times bestseller list at the moment. I
// // 								find time to listen to podcasts - my favorite topics are
// // 								personal finance, economics and True Crime.
// // 							</p>
// // 						</div>
// // 					</Collapse>
// // 				</Col>
// // 			</Row>
// // 		</Container>
// // 	);
// // }

// // export default About;
