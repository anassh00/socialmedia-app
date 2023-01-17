import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <div>
        <div className='navbarContainer'>
          <div className='navbarContent'>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white', paddingRight : '50rem'}}>FakeInstagram</div>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', paddingRight : '12px'}}>Home</div>
          <div onClick={() => routeChange('/Profile')} style={{cursor: 'pointer', paddingRight : '12px'}}>Profile</div>
          <div onClick={() => routeChange('/Message')} style={{cursor: 'pointer', paddingRight : '12px'}}>Message</div>
          </div>
        </div>
    </div>
  )
}

export default NavBar