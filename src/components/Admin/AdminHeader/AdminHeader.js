import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const AdminHeader = () => {
    const { user, admin, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container className="mb-2">
                <Navbar.Brand href="#home" className="nav-brand me-5">
                    <a href="#" className="logo">
                        ADMIN PANEL
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link className="nav-menu" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        {admin && (
                            // <Nav.Link
                            //     className="nav-menu"
                            //     as={Link}
                            //     to="/allBooking"
                            // >
                            //     Manage All Booking
                            // </Nav.Link>
                            <NavDropdown
                                title="Booking"
                                // className="dropdown"
                                id="dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item as={Link} to="/allBooking">
                                    Manage All Booking
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/alltransport">
                                    All Booked Transport
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {admin && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/addnewservice"
                            >
                                Add Service
                            </Nav.Link>
                        )}
                        {admin && (
                            <Nav.Link
                                className="nav-menu"
                                as={Link}
                                to="/allservice"
                            >
                                All Service
                            </Nav.Link>
                        )}
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

export default AdminHeader;
