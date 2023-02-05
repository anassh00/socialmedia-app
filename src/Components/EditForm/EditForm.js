import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import authService from '../../Services/auth.service';
import { useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";
import postService from '../../Services/post.service';

const EditForm = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInput = useRef(null);

  const [user, setUser] = useState({
    description: "",
    email: ""
  });
  const authed = authService.getCurrentUser();
  const API_URL = "http://localhost:8000/";

  useEffect(() => {
    const dataFetch = async () => {
      let userDataFetched = await authService.getUserById(authed.data.username)
      // set state when the data received
      console.log("user", userDataFetched)
      setUser(userDataFetched[0]);
      setLoading(false);
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

  const handleFile = file => {
    // setImage(file);
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  const handleOndragOver = event => {
    event.preventDefault();
  }

  const handleOndrop = event => {
    //prevent the browser from opening the image
    event.preventDefault();
    event.stopPropagation();         //let's grab the image file
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  }

  async function handleEdit() {
    try {
      if (file) {
        let uploadfile = await authService.uploadfile(file);
        console.log(uploadfile);
        authService.updateWithImage(email ? email : user.email, description ? description : user.description, uploadfile).then(
          () => {
            routeChange('/Profile/' + authed.data.username)
          }, error => {
            console.log("update failed")
          }
        )
      }else{
        authService.update(email ? email : user.email, description ? description : user.description).then(
          () => {
            routeChange('/Profile/' + authed.data.username)
          }, error => {
            console.log("update failed")
          }
        )
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      {loading && <ReactLoading type={"spinningBubbles"} color="#000000" className='spinner' />}
      <div style={{ paddingLeft: "180px", paddingRight: "180px", paddingTop: "30px" }}>
        <div className='profileImage' style={{ display: 'flex', justifyContent: 'center' }}>
          {(user.filename || previewUrl) ?
          <img
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
          onClick={() => fileInput.current.click()}
          style={{ cursor: 'pointer' }} 
          src={previewUrl ? previewUrl : API_URL+"media/"+user.filename} alt="" />
                  
            :
          <img 
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
          onClick={() => fileInput.current.click()}
          style={{ cursor: 'pointer' }} 
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="" />
          }
          <input
            type="file"
            accept='image/*'
            ref={fileInput} hidden
            onChange={e => handleFile(e.target.files[0])}
          />
        </div>
        <Form>
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