import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Đăng Nhập:</Label>
                    <Input type="text" name="username" id="exampleUserName" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Mật Khẩu:</Label>
                    <Input type="password" name="password" id="examplePassword" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Login;