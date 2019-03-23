import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

const AppNavBar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Navbar color="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/">
						<span style={{ color: 'white', fontWeight: 'bold' }}>Fev:</span>
						<span style={{ fontSize: '24px', fontWeight: 'bold', color: '#008100' }}>:Meme</span>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav style={{ padding: '5px 0', fontSize: '18px' }} className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Find Meme</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Login / Join-Us</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavBar;
