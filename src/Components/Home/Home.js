import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import authService from '../../Services/auth.service'
import postService from '../../Services/post.service'
import ReactLoading from "react-loading";
import NavBar from '../NavBar/NavBar'
import Post from '../Post/Post'
import PostCard from '../PostCard/PostCard'
import './Home.css'

const Home = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const authed = authService.getCurrentUser();
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:8000/";

  const [user, setUser] = useState({
    description : "",
    email : ""
  });

  useEffect(() => {
    const dataFetch = async () => {
      let postsFetched = await postService.getPost();
      let userDataFetched = await authService.getUserById(authed.data.username)
      // set state when the data received
      console.log("user",userDataFetched)
      setUser(userDataFetched[0]);
      setPosts(postsFetched);
      setLoading(false)
    };
    
    dataFetch();
  }, [])
  
  const toggle = () => setModal(!modal);
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  return (
    <div>
      <NavBar></NavBar>
      {loading && <ReactLoading type={"spinningBubbles"} color="#000000" className='spinner'/>}
      <Post modal={modal} toggle={toggle} />
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div style={{ marginTop: "30px", marginRight: "30px" }}>
          {
            Array.from(posts).reverse().map((post) => {
              return (<PostCard post={post} commentFct={toggle}></PostCard>)
            })
          }
        </div>
        <div style={{ marginTop: "30px" }}>
          <Card
            className="my-2"
            style={{
              width: '24rem',
            }}
          >
            <CardBody>
              <div onClick={() => routeChange('/Profile/'+authed.data.username)} style={{ display: "flex", marginBottom: "10px", cursor: "pointer" }}>
                <div className='profileImageCard'>
                  <img src={user.filename ? API_URL+"media/"+user.filename : "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}  alt="" />
                </div>
                <div>{authed.data.username}</div>
              </div>
              <CardText>
                Email : {user.email}
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home