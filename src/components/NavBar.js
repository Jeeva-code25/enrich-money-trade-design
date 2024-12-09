import React from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-teritary bg-secondary border border-b_color">
            <Container fluid>
                <Navbar.Brand href="#"><Image src={require('../assets/logo.png')} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    // variant='underline'
                        className="me-auto my-2 my-lg-0 gap-2"
                    >
                        <Nav.Link href="#dashboard"><Image src={require('../assets/home.png')} /> Dashboard</Nav.Link>
                        <Nav.Link href="#orders"><Image src={require('../assets/books.png')} /> Orders</Nav.Link>
                        <Nav.Link href="#portfolio"><Image src={require('../assets/briefcase.png')} /> Portfolio</Nav.Link>
                        <Nav.Link href="#funds"><Image src={require('../assets/wallet-passes-app.png')} /> Funds</Nav.Link>
                        <Nav.Link href="#easyalgo"><Image src={require('../assets/egrow.png')} /> EasyAlgo</Nav.Link>
                    </Nav>
                    <Form className="d-flex search-box">
                        <Form.Control
                            type="search"
                            placeholder="search instruments here"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button><i className="bi bi-search"></i></Button>
                    </Form>
                    <Nav className="me-0 m-2">
                        <Button className='bg-secondary border-0'><Image src={require('../assets/moon-stars.png')} /></Button>
                        <Button className='bg-secondary border-0 position-relative'><Image src={require('../assets/bell.png')} /><span class="position-absolute top-45 start-50 badge rounded-pill bg-primary">
                            3
                            <span className="visually-hidden">unread messages</span>
                        </span></Button>
                        <Button className='bg-secondary border-0'><Image src={require('../assets/profile-user.png')} /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar