import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css'
import * as ConstFile from '../../Utils/Const.js';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';

const Login = () => {
  return !ConstFile.logged ? 
  <div>
    <div className='divContainer'>
        <Form className='loginForm'>
            <h3>Login</h3>
            <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                />
            </FormGroup>
            <Button>Submit</Button>
            <br></br>
            <Link style={{color : 'black'}} to='/Register'>Create account</Link>
        </Form>
    </div>
    </div>
    :
    <Navigate to="/" />
}

export default Login