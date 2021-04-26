import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import './DashboardNav.scss';

const DashboardNav = ({ handleLogout }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand>
                    <ScrollLink className="text-white" to="dashboard" spy={true} smooth={true} >TakeIT dashboard</ScrollLink>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-news" spy={true} smooth={true}>Noutăți</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-ccl" spy={true} smooth={true}>CCL</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-aures" spy={true} smooth={true}>Aures</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-datalogic" spy={true} smooth={true}>Datalogic</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-shopguard" spy={true} smooth={true}>Shopguard</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-zebra" spy={true} smooth={true}>Zebra</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-bizebra" spy={true} smooth={true}>Bizebra</ScrollLink>
                    </Nav.Link>
                    <Nav.Link>
                        <ScrollLink className="text-muted" to="dashboard-tsc" spy={true} smooth={true}>TSC</ScrollLink>
                    </Nav.Link>
                    <Nav>
                        <Button onClick={handleLogout} variant={"danger"}>Logout</Button>
                    </Nav>
                </Nav>
            </Navbar>
        </>
    );
}

export default DashboardNav;