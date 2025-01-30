import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="sticky-top">
                <Container>
                    <Link to='/' className='navlogo fw-bold text-decoration-none text-black p-1'><img src={logo} alt="" />TaskDuty</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav bg-primary">
                        <Nav className=" navss ms-auto gap-3 fs-6 navs">
                            <Link to='/new' className="hrefs text-decoration-none text-black ">
                                New Task
                            </Link>
                            <Link to='/all' className="hrefs text-decoration-none text-black">
                                My Tasks
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header