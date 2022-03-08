import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNavbar() {
		this.setState({
			isOpen: false
		});
	}
	render() {
		return (
			<Navbar className='navbar' dark expand='xl' sticky='top'>
				<NavbarBrand className='mr-auto' href='/projectWebsite/'>
					<img
						src='./assets/logo3.png'
						height='70'
						width='auto'
						alt='Meghan LaBreche logo'
					/>
				</NavbarBrand>

				<NavbarToggler onClick={this.toggle} />

				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='justify-content-end' style={{ width: '100%' }} navbar>
						<NavItem>
							<NavLink>
								<Link
									to='/'
									style={{ textDecoration: 'none', color: 'white' }}
									onClick={this.closeNavbar}
								>
									Home
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link
									to='/about'
									style={{ textDecoration: 'none', color: 'white' }}
									onClick={this.closeNavbar}
								>
									About
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link
									to='/contact'
									style={{ textDecoration: 'none', color: 'white' }}
									onClick={this.closeNavbar}
								>
									Contact
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link
									to='/projects'
									style={{ textDecoration: 'none', color: 'white' }}
									onClick={this.closeNavbar}
								>
									Projects
								</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
