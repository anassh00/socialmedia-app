import React from 'react'
import { Navigate } from 'react-router-dom'
import * as ConstFile from '../Utils/Const.js'

const PrivateRoute = ({ children }) => {
    const authed = ConstFile.logged // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/Login" />;
  }

export default PrivateRoute