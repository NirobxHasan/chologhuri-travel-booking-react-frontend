import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';
import logo from '../../../images/logo/favicon.jpg';
const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container className="mb-2">
                <Navbar.Brand href="#home" className="nav-brand me-5">
                    <a href="#" className="logo">
                        <span>T</span>ravel <span>B</span>uddy
                    </a>
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
                        <Nav.Link className="nav-menu" as={Link} to="/map">
                            Map
                        </Nav.Link>

                        {user.email && (
                            <NavDropdown
                                title="My Booking"
                                // className="dropdown"
                                id="dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item as={Link} to="/myBooking">
                                    Booked Tour Package
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/bookedTransport"
                                >
                                    Booked Transport
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {/* {user.email && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/allBooking"
                            >
                                Manage All Booking
                            </Nav.Link>
                        )} */}
                        {/* {user.email && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/addnewservice"
                            >
                                Add Service
                            </Nav.Link>
                        )} */}
                        {user.email && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/blogs"
                            >
                                Blogs
                            </Nav.Link>
                        )}
                        {/* {user.email && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/addblog"
                            >
                                Add Blog
                            </Nav.Link>
                        )} */}
                        {user.email && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/addreview"
                            >
                                Add Review
                            </Nav.Link>
                        )}

                        {/* <Nav.Link
                            as={HashLink}
                            className="nav-menu"
                            to="/home#about"
                        >
                            About us
                        </Nav.Link> */}
                    </Nav>
                    <Nav>
                        {user.displayName ? (
                            <Navbar.Text style={{ color: '#fff' }}>
                                Signed in as:{' '}
                                <a href="#login" style={{ color: '#fff' }}>
                                    {user.displayName}
                                </a>
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
