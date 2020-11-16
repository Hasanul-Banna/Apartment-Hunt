import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const Navibar = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    return (
        <Navbar className="px-md-5 navi" bg="transparent" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Service</Nav.Link>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                    {!loggedInUser.name && <Link to="/Login"> <Button className="btn" variant="info">Log in</Button></Link>}
                    {loggedInUser.name && <Button className="btn" variant="info" onClick={() => setloggedInUser('')} >Log Out</Button>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;








