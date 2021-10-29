import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className="mb-2">
                <Navbar.Brand href="#home" className="nav-brand me-5">
                    CholoGhuri
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link className="nav-menu" href="#features">
                            Home
                        </Nav.Link>
                        <Nav.Link className="nav-menu" href="#pricing">
                            Services
                        </Nav.Link>
                        <Nav.Link className="nav-menu" href="#pricing">
                            Blog
                        </Nav.Link>
                        <Nav.Link className="nav-menu" href="#pricing">
                            About us
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
