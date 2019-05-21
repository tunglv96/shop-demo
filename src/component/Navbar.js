import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    - Just another WordPress site
                </Navbar>
            </div>
        );
    }
}

export default Navbar;
