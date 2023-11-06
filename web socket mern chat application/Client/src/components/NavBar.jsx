import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/register">Chat App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>

                {
                    !user ? (
                        <Nav className="ml-auto">
                            <Nav.Link href="/login" className="btn btn-primary mr-2">
                                Sign In
                            </Nav.Link>
                            <Nav.Link href="/register" className="btn btn-secondary">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    ) : null
                }


                {
                    user ? (
                        <div className='margined'>
                            <NavDropdown title={user ? user.name : "Profile"} id="basic-nav-dropdown" className='mr-5'> {/* Adjusted margin */}
                                <NavDropdown.Item href="#" disabled>My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout" onClick={()=> logoutUser()}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    ) : null
                }
            </Navbar.Collapse>

        </Navbar>
    );
}

export default NavBar;
