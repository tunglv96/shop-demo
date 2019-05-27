import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Breadcrumbs.css';


class Breadcrumbs extends Component {
    render() {
        return (
            <div>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem>Shop</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default Breadcrumbs;