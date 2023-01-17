import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Input, Label, FormGroup } from 'reactstrap'
import './Register.css'

const Register = () => {
  return (
    <div className='registerContainer'>
        <Form className='registerForm'>
            <h3>Register Here</h3>
            <FormGroup>
            <Label for="firstname">Image</Label>
            <Input type="text" placeholder="Email or Phone" id="firstname"></Input>
            </FormGroup>
            <FormGroup>
            <Label for="firstname">FirstName</Label>
            <Input type="text" placeholder="Email or Phone" id="firstname"></Input>
            </FormGroup>
            <FormGroup>
            <Label for="lastname">LastName</Label>
            <Input type="text" placeholder="Email or Phone" id="lastname"></Input>
            </FormGroup>
            <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" placeholder="Email or Phone" id="username"></Input>
            </FormGroup>
            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" placeholder="Password" id="password"></Input>
            </FormGroup>
            <Button>Register</Button>
            <br></br>
            <Link to='/Login'>Have account ? Login</Link>
        </Form>
    </div>
  )
}

export default Register