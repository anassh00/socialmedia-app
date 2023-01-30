import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import NavBar from '../NavBar/NavBar'
import Post from '../Post/Post'
import PostCard from '../PostCard/PostCard'

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <div>
      <NavBar></NavBar>
      <Post modal={modal} toggle={toggle} />
      <div style={{ display: 'flex', justifyContent : "center"}}>
        <div style={{ marginTop: "30px", marginRight: "30px" }}>
          <PostCard commentFct={toggle}></PostCard>
          <PostCard commentFct={toggle}></PostCard>
          <PostCard commentFct={toggle}></PostCard>
          <PostCard commentFct={toggle}></PostCard>
          <PostCard commentFct={toggle}></PostCard>
          <PostCard commentFct={toggle}></PostCard>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Card
            className="my-2"
            style={{
              width: '24rem',
            }}
          >
            <CardBody>
            <div onClick={() => routeChange('/Profile')} style={{display : "flex", marginBottom : "10px", cursor : "pointer"}}>
            <div className='profileImageCard'>
                <img src="https://i.imgur.com/HAL10fll.png" alt=""/>
            </div>
            <div>User Connect Info</div>
            </div>
              <CardText>
                Recommendations
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home