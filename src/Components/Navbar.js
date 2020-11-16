import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png'
const Navibar = () => {
    return (
        <Navbar  className="px-md-5 navi" bg="transparent" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Service</Nav.Link>
                    <Nav.Link href="/">Concern</Nav.Link>
                    <Nav.Link href="/">Event</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                    <Button className="btn" variant="info">Log in</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;