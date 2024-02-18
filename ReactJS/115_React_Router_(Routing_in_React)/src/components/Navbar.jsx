import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
   <nav>
    <NavLink className={(a)=>{return a.isActive?"red":""}} to="/"><li>Home</li></NavLink>
    <NavLink className={(a)=>{return a.isActive?"red":""}} to="/about"><li>About</li></NavLink>
    <NavLink className={(a)=>{return a.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
    
   </nav>
  )
}

export default Navbar