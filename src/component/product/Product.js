import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Product extends Component {
   
    render() {  
        return (
            <Col xs="3" className="mt-3">
                <Card>
                    <CardImg top width="100%" src={this.props.images} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardSubtitle>{this.props.price}</CardSubtitle>
                        <Button>Add to cart</Button>
                    </CardBody> 
                </Card>
            </Col>
        );
    }
}

export default Product;
