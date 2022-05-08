import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='nav-bar' >
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="" /> <span className='title'>DEALER BD</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <NavDropdown title="Brands" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Yamaha</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Suzuki</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bajaj</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">TVS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hero</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ducati</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to='/manage' >Manage</Nav.Link>
                                    <Nav.Link as={Link} to='/addItems'>AddItems</Nav.Link>
                                    <Nav.Link as={Link} to='/myItems'>MyItems</Nav.Link>

                                    <button style={{ background: 'aliceblue' }} className='border-0 text-dark fw-bold' onClick={handleLogout}>Logout</button>

                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                    <Nav.Link as={Link} to='/register'>
                                        Register
                                    </Nav.Link>
                                </>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;