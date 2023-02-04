import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap'; 
import authService from '../../Services/auth.service';
import { useNavigate } from 'react-router-dom';

const EditForm = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    description : "",
    email : ""
  });
  const authed = authService.getCurrentUser();

  useEffect(() => {
    const dataFetch = async () => {
      let userDataFetched = await authService.getUserById(authed.data.username)
      // set state when the data received
      console.log("user",userDataFetched)
      setUser(userDataFetched[0]);
    };

    dataFetch();
  }, [])

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  let navigate = useNavigate();
  const routeChange = (path) => {
      navigate(path);
  }

  const handleEdit = () => {
    authService.update(email,description).then(
      () => {
          routeChange('/Profile/'+authed.data.username)
      }, error => {
          console.log("update failed")
      }
  )
  }

  return (
    <div>
      <NavBar></NavBar>
      <div style={{paddingLeft : "180px", paddingRight : "180px", paddingTop : "30px"}}>
      <Form>
        {/* <FormGroup>
          <Label for="userName">
            Username
          </Label>
          <Input
            id="userName"
            name="userName"
            placeholder="userName"
            type="text"
            onChange={handleChangeUsername}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="description"
            name="text"
            type="textarea"
            onChange={handleChangeDescription}
            defaultValue={user.description || ''} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            onChange={handleChangeEmail}
            defaultValue={user.email || ''} 
          />
        </FormGroup>
        <Button onClick={handleEdit}>
          Submit
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default EditForm