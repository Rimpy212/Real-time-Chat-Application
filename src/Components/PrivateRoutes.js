import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext';

//<Outlet> is component that acts as a placeholder where child routes can be rendered. 
const PrivateRoutes = () => {
    const {user} = useAuth();
  return (
    <>
      {user ? <Outlet/> : <Navigate to="/login"/> }
    </>
  )
}

export default PrivateRoutes
