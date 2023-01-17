import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import NavBar from '../NavBar/NavBar'
import PostCard from '../PostCard/PostCard'

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ display: 'flex', justifyContent : "center"}}>
        <div style={{ marginTop: "30px", marginRight: "30px" }}>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Card
            className="my-2"
            style={{
              width: '24rem',
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                User Connect Info
              </CardTitle>
              <CardText>
                Recommendation
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home