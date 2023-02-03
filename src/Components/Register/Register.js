import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Input, Label, FormGroup } from 'reactstrap'
import authService from '../../Services/auth.service'
import './Register.css'

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  async function handleSubmit() {
    try {
      let registration = await authService.register(username, email, password);
      routeChange("/Login");
    } catch (e) {
      console.error(e);
    }
  }

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <div className='registerContainer'>
      <div style={{ fontWeight: 'bold', color: 'white', fontSize: "40px", textAlign : "center", marginTop : "40px" }}>FakeInstagram</div>
      <Form className='registerForm'>
        {/* <FormGroup>
          <Label for="firstname">Image</Label>
          <Input type="text" placeholder="Email or Phone" id="firstname"></Input>
        </FormGroup> */}
        <FormGroup>
          <Label for="lastname">Email</Label>
          <Input onChange={handleChangeEmail} type="text" placeholder="Email" id="email"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input onChange={handleChangeUsername} type="text" placeholder="Username" id="username"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={handleChangePassword} type="password" placeholder="Password" id="password"></Input>
        </FormGroup>
        <Button style={{marginBottom : "10px"}} onClick={handleSubmit}>Register</Button>
        <br></br>
        <Link style={{color : "white"}} to='/Login'>Have account ? Login</Link>
      </Form>
    </div>
  )
}

export default Register