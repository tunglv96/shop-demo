import React, { Component } from 'react';
import Breadcrumbs from '../../layout/content/Breadcrumbs';
import Title_header_content from '../../layout/content/Title-header-content';
import Search from '../../layout/content/Search';
import Dropdown_content from '../../layout/content/Dropdown-content';
import Slowing from '../../layout/content/Showing';
import Product from '../../layout/content/Product';
import img1 from '../../../images/img1.jpg';
import Pagination_pro from '../../layout/content/Pagination-pro';
import { Row, Col } from 'reactstrap';


class Posters extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    {/* <Navbar /> */}
                    <Breadcrumbs />
                    <div>
                        <Row>
                            <Title_header_content />
                            <Search />
                        </Row>
                    </div>
                </header>
                <section>
                    <Row>
                        <Col xs="6">
                            <Slowing />
                        </Col>
                        <Col xs="6">
                            <Dropdown_content />
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                       
                            
                            <Product
                                name= "Flying Ninja"
                                price= "$12.00"
                                images = {img1}
                                
                            />
                       
                       
                        <Product
                            name= "Flying Ninja"
                            price= "$16.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$12.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$17.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$19.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$12.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$11.00"
                            images = {img1}
                        />
                        <Product
                            name= "Flying Ninja"
                            price= "$15.00"
                            images = {img1}
                        />
                    </Row>
                </section>
                <Pagination_pro />
            </React.Fragment>
        );
    }
}

export default Posters;
