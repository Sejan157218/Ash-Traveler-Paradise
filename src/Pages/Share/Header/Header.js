import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { logout, user } = useAuth();
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">𝓐𝓢𝓗 𝓣𝓻𝓪𝓿𝓮𝓵𝓮𝓻 𝓟𝓪𝓻𝓪𝓭𝓲𝓼𝓮</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutus">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/blogs"> Blog</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="me-auto">
                                {
                                    user.email ?
                                        <Nav className="me-auto">
                                            <Nav.Link as={HashLink} to="/">{user?.displayName}</Nav.Link>
                                            <NavDropdown style={{ background: `url('${user?.photoURL}') no-repeat center center`, borderRadius: "50%", width: "40px" }}>
                                                <NavDropdown.Item as={HashLink} to="/orders">Manage Booking</NavDropdown.Item>
                                                <NavDropdown.Item as={HashLink} to="/myorders">My Booking</NavDropdown.Item>
                                                <NavDropdown.Item as={HashLink} to="/addplaces">Add Places</NavDropdown.Item>
                                                <NavDropdown.Item as={HashLink} to="" onClick={logout}>Sign out <i class="fas fa-sign-out-alt"></i></NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        :
                                        <Nav className="me-auto">

                                            <Nav.Link as={HashLink} to="/login">Sign in <i class="fas fa-sign-in-alt"></i></Nav.Link>
                                        </Nav>
                                }
                            </Nav>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div>
        //     {
        //         user.email ? <button onClick={logout}>LogOut</button> : <Link to="/login"><button>Login</button></Link>
        //     }
        // </div>
    );
};

export default Header;