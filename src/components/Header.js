import React from 'react'
import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar color="info">
                <NavbarBrand>
                    Header
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/">Home</Link>
                        <Link to="/answers">Answers</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
};

export default Header;