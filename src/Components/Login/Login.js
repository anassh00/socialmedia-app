import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css'
import * as ConstFile from '../../Utils/Const.js';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';
import authService from '../../Services/auth.service';

const Login = () => {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const currentUser = authService.getCurrentUser();

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
      navigate(path);
    }

    const handleLogin = () => {
        authService.login(username, password).then(
            () => {
                routeChange('/Profile')
            }, error => {
                console.log("auth failed")
            }
        )
    }

    return !currentUser ?
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
                            onChange={handleChangeUsername}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            onChange={handleChangePassword}
                        />
                    </FormGroup>
                    <Button onClick={handleLogin}>Submit</Button>
                    <br></br>
                    <Link style={{ color: 'black' }} to='/Register'>Create account</Link>
                </Form>
            </div>
        </div>
        :
        <Navigate to="/" />
}

export default Login