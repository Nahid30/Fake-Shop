import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-shop.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {


    return (

        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand 
                    
                    as={Link} to="/"> <img src={logo} alt="" /> Fake Shop
                    

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="products">All Products</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;