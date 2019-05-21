import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './Navbar.css';

class Nav_bar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md" className="light1">
                <NavbarBrand href="/">Demo</NavbarBrand>
                - Just another WordPress site
            </Navbar>
        );
    }
}

export default Nav_bar;
