import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap'; 

const EditForm = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{paddingLeft : "180px", paddingRight : "180px", paddingTop : "30px"}}>
      <Form>
        <FormGroup>
          <Label for="userName">
            Username
          </Label>
          <Input
            id="userName"
            name="userName"
            placeholder="userName"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="description"
            name="text"
            type="textarea"
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
          />
        </FormGroup>
        <Button>
          Submit
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default EditForm