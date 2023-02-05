import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import authService from '../../Services/auth.service';
import Create from '../Create/Create';
import './NavBar.css'

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const authed = authService.getCurrentUser();

  const toggle = () => setIsOpen(!isOpen);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const logOut = () => {
    authService.logout();
    routeChange('/Login');
  };
  
  return (
    <div>
        <div className='navbarContainer'>
          <div className='navbarContent'>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white', paddingRight : '44rem'}}>FakeInstagram</div>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', marginRight : '17px'}}>Home</div>
          <div onClick={() => toggleModal()} style={{cursor: 'pointer', marginRight : '17px'}}>Create</div>
          <div onClick={() => routeChange('/Profile/'+authed.data.username)} style={{cursor: 'pointer', marginRight : '17px'}}>Profile</div>
          {/* <div onClick={() => routeChange('/Message')} style={{cursor: 'pointer', marginRight : '12px'}}>Message</div> */}
          <div onClick={() => logOut()} style={{cursor: 'pointer', marginRight : '12px'}}>Logout</div>
          </div>
        </div>
        <Create modal={modal} toggle={toggleModal}/>
    </div>
  )
}

export default NavBar