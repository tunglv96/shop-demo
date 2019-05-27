import React, { Component } from 'react';
import Product from '../../../layout/content/Product';
import Breadcrumbs from '../../../layout/content/Breadcrumbs';
import Tab_product from './Tab_product';
import Product_detail from './Product_detail';
import img1 from '../../../../images/img1.jpg';
import { Row } from 'reactstrap';

class Posters_product extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Breadcrumbs />
                </header>
                <div>
                    <Row>
                        <Product_detail
                            name= "Flying Ninja"
                            price= "$17.00"
                            images = {img1}
                        />
                    </Row>
                    <Tab_product />
                    <div>
                        <h2>You may also like…</h2>
                        <div>
                            <Row>
                                <Product
                                name= "Flying Ninja"
                                price= "$12.00"
                                images = {img1}
                                />
                                <Product
                                    name= "Flying Ninja"
                                    price= "$12.00"
                                    images = {img1}
                                />
                            </Row>
                        </div>
                    </div>
                    <div>
                        <h2>Related products</h2>
                        <div>
                            <Row>
                                <Product
                                name= "Flying Ninja"
                                price= "$12.00"
                                images = {img1}
                                />
                                <Product
                                    name= "Flying Ninja"
                                    price= "$12.00"
                                    images = {img1}
                                />
                                <Product
                                    name= "Flying Ninja"
                                    price= "$12.00"
                                    images = {img1}
                                />
                                <Product
                                    name= "Flying Ninja"
                                    price= "$12.00"
                                    images = {img1}
                                />
                                <Product
                                    name= "Flying Ninja"
                                    price= "$12.00"
                                    images = {img1}
                                />
                            </Row>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Posters_product;