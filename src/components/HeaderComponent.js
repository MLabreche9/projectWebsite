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
	render() {
		return (
			<Navbar className='navbar' dark expand='xl' sticky='top'>
				<NavbarBrand href='/projectWebsite/'>Meghan La Breche</NavbarBrand>

				<NavbarToggler onClick={this.toggle} />

				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='justify-content-end' style={{ width: '100%' }} navbar>
						<NavItem>
							<NavLink>
								<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
									Home
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link
									to='/about'
									style={{ textDecoration: 'none', color: 'white' }}
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
