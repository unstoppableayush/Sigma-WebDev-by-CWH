import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

const Navbar = () => {
    
  return (
   <nav>
    <a href="/"><li>Home</li></a>
    <a href="/"><li>About</li></a>
    <a href="/"><li>Contact</li></a>
    
   </nav>
  )
}

export default Navbar