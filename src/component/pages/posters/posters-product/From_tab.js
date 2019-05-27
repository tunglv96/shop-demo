import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class From_tab extends Component {
    render() {
        return (
            <Form>
               <FormGroup>
                    <Label for="exampleText">Your Review</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup> 
                
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0"> 
                    <Label for="examplePassword" className="mr-sm-2">Name</Label>
                    <Input type="text" name="username" id="exampleName" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck"/>
                    <Label for="exampleCheck" check>Save my name, email, and website in this browser for the next time I comment</Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default From_tab;