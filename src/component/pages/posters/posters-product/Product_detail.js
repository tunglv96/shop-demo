import React, { Component } from 'react';
import From_product from './From_product';
import { Col } from 'reactstrap';


class Product_detail extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xs="3">
                    <img top width="100%" alt={ this.props.name } src={ this.props.images} />
                        
                </Col>
                <Col xs="3">
                    <h3>{ this.props.name }</h3>
                    <span>{ this.props.price }</span>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor 
                        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies 
                        mi vitae est. Mauris placerat eleifend leo.
                    </p> 
                    <From_product />
                </Col>
            </React.Fragment>
        );
    }
}

export default Product_detail;
