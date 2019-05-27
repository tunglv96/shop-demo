import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Home_footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                        <Row>
                            <Col xs="3">admin</Col>
                            <Col xs="3">May 16, 2019</Col>
                            <Col xs="3">Uncategorized</Col>
                            <Col xs="3">1 Comment</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home_footer;
