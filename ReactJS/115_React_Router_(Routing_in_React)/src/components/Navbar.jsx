import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
   <nav>
    <Link to="/"><li>Home</li></Link>
    <Link to="/about"><li>About</li></Link>
    <Link to="/login"><li>Login</li></Link>
    
   </nav>
  )
}

export default Navbar