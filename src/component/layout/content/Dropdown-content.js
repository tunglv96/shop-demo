import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropdown_content extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                Default sorting
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Sort by popularity</DropdownItem>
                    <DropdownItem>Sort by average rating</DropdownItem>
                    <DropdownItem>Sort by latest</DropdownItem>
                    <DropdownItem>Sort by price: low to high</DropdownItem>
                    <DropdownItem>Sort by price: high to low</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default Dropdown_content;