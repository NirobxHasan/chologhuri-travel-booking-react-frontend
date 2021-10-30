import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';
const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className="mb-2">
                <Navbar.Brand href="#home" className="nav-brand me-5">
                    CholoGhuri
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link className="nav-menu" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            className="nav-menu"
                            as={HashLink}
                            to="/home#services"
                        >
                            Tour Package
                        </Nav.Link>
                        <Nav.Link className="nav-menu" href="#pricing">
                            Blog
                        </Nav.Link>
                        <Nav.Link className="nav-menu" href="#pricing">
                            About us
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user.displayName ? (
                            <Navbar.Text>
                                Signed in as:{' '}
                                <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        ) : (
                            ''
                        )}
                        {user.email ? (
                            <button
                                className="log-btn"
                                onClick={() => logOut()}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="log-btn">Login</button>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
