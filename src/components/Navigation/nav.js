import React from 'react';
import { Container, Nav, Navbar, Col } from 'react-bootstrap';
import '../../Assets/css/custom.css';

const Navigation = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container className='navbar-fonts'>
				<Col className='d-flex justify-content-start'>
					<Navbar.Brand href='#About'>Matt McGee</Navbar.Brand>
				</Col>
				<Col>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse className='d-flex justify-content-end' id='basic-navbar-nav'>
						<Nav>
							<Nav.Link href='#About'>About Me</Nav.Link>
							<Nav.Link href='#Portfolio'>Portfolio</Nav.Link>
							<Nav.Link href='#Contact'>Contact</Nav.Link>
							<Nav.Link href='#Resume'>Resume</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Navigation;
