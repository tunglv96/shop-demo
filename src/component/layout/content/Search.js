import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Button, Row} from 'reactstrap';

class Search extends Component {
    render() {
        return (
            <Col xs="9">
                <Form>
                    <Row>
                        <Col xs="8">
                            <FormGroup>
                                <Input type="text" name="text" placeholder="Search..." />
                            </FormGroup>
                        </Col>
                        <Col xs="4">
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        );
    }
}

export default Search;
