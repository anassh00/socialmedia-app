import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Profile.css'

const Profile = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Edit`; 
    navigate(path);
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className='profileContainer'>
      <div className='userDetailsContainer'>
        <div style={{display : 'flex'}}>
          <div className='profileImage'>
            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
          </div>
          <div className='userDetails'>
            <div>
              <div style={{display : "flex"}}>
                <div>
                  <h4>janedoe_</h4>
                </div>
                <div style={{marginLeft : "10px", marginTop : "2px"}} onClick={routeChange}>
                  <img className='editIcon' src="/Ic_settings_48px.svg.png" alt=""/>
                </div>
              </div>
              <div className='followersContainer'>
                  <span>164</span> posts
                  <span>188</span> followers
                  <span>206</span> following
              </div>
            </div>
            <div>
                <p><span>Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-container">
          <div class="grid-item"><img style={{width : '100%', height : '100%'}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/></div>
          <div class="grid-item"><img style={{width : '100%', height : '100%'}} src="https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=" alt=""/></div>
          <div class="grid-item">3</div>  
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>  
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>  
        </div>
        </div>
    </div>
  )
}

export default Profile