import React, { useState } from 'react';
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

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const closeNavbar = () => setIsOpen(false);

	return (
		<Navbar className='navbar' dark expand='xl' sticky='top'>
			<NavbarBrand className='mr-auto' href='/projectWebsite/'>
				<img
					src='./assets/MLLogo2.png'
					height='125px'
					width='auto'
					alt='Meghan LaBreche logo'
				/>
			</NavbarBrand>

			<NavbarToggler
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>

			<Collapse isOpen={isOpen} navbar>
				<Nav className='justify-content-end' style={{ width: '100%' }} navbar>
					<NavItem>
						<NavLink>
							<Link to='/' className='header_link' onClick={closeNavbar}>
								Home
							</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link to='/about' className='header_link' onClick={closeNavbar}>
								About
							</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link to='/contact' className='header_link' onClick={closeNavbar}>
								Contact
							</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link
								to='/projects'
								className='header_link'
								onClick={closeNavbar}
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

export default Header;
