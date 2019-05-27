import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Nav_bar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md" className="light1">
                <NavbarBrand to="/">Demo</NavbarBrand>
                - Just another WordPress site
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Posters">Posters</NavLink>
                    </NavItem>
                </Nav> 
            </Navbar>
        );
    }
}

export default Nav_bar;
