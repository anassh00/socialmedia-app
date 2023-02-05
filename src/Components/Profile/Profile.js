import React, { useEffect, useState } from 'react'
import { Link, useFetcher, useLocation, useNavigate, useParams } from 'react-router-dom'
import authService from '../../Services/auth.service'
import postService from '../../Services/post.service'
import NavBar from '../NavBar/NavBar'
import ReactLoading from "react-loading";
import './Profile.css'
import Post from '../Post/Post'

const Profile = () => {
  const authed = authService.getCurrentUser();
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [postDesc, setPostDesc] = useState("");
  const [postFileName, setPostFileName] = useState("");
  const [user, setUser] = useState({
    description : "",
    email : ""
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Edit`;
    navigate(path);
  }
  const toggle = (desc,name) => {
    setModal(!modal)
    setPostDesc(desc);
    setPostFileName(name);
  };

  const close = () => {
    setModal(!modal)
  }

  const API_URL = "http://localhost:8000/";

  const checkIsVideo = (file) => {
    let ext = file.split('.').pop();
    if (ext == "mp4") {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const dataFetch = async () => {
      let postsFetched = await postService.getUserPosts(id ? id : authed.data.username);
      let userDataFetched = await authService.getUserById(id ? id : authed.data.username)
      // set state when the data received
      console.log("user",userDataFetched)
      setUser(userDataFetched[0]);
      setPosts(postsFetched);
      setLoading(false)
    };

    dataFetch();
  }, [])

  return (
    <div>
      <NavBar></NavBar>
      <Post close={close} modal={modal} toggle={toggle} desc={postDesc} filename={postFileName}/>
      {loading && <ReactLoading type={"spinningBubbles"} color="#000000" className='spinner'/>}
      <div className='userDetailsContainer'>
          <div style={{ display: 'flex' }}>
            <div className='profileImage'>
                  <img src={user.filename ? API_URL+"media/"+user.filename : "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}  alt="" />
                </div>
            <div className='userDetails'>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <h4>{id ? id : authed.data.username}</h4>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }} onClick={routeChange}>
                    {(id === authed.data.username) && <img className='editIcon' src="/Ic_settings_48px.svg.png" alt="" />}
                  </div>
                </div>
                <div className='followersContainer'>
                  Email : {user.email}
                  <br></br>
                  Description : {user.description}
                </div>
              </div>
              {/* <div>
                <p><span>Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
            </div> */}
            </div>
          </div>
        </div>
      <div className='profileContainer'>
        
        { posts.length > 0 ? 
        <div class="grid-container">
        {
          Array.from(posts).reverse().map((post) => {
            return (<div onClick={()=>toggle(post.description,post.filename)} style={{cursor : 'pointer'}}class="grid-item">
              {!checkIsVideo(post.filename) && post.filename ?
                <img style={{ width: "100%", height: "100%", margin: "0 auto" }} src={API_URL + "media/" + post.filename} />
                :
                <div></div>
              }
              {checkIsVideo(post.filename) && post.filename ?
                <video width="100%" height="100%" controls >
                  <source src={API_URL + "media/" + post.filename} type="video/mp4" />
                </video>
                :
                <div></div>
              }
            </div>)
          })
        }
      </div>
        : 
      <h2 style={{marginTop : "140px"}}>Pas de publication encore disponible</h2>
        }
      </div>
    </div>
  )
}

export default Profile