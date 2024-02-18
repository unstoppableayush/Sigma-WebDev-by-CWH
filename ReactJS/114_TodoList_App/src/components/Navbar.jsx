import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-800 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>iTask</span>
      </div>
      <ul className="flex gap-8 mx-5">
          <li className="cursor-pointer hover:font-bold transition-all duration-150">Home</li>
          <li  className="cursor-pointer hover:font-bold transition-all">Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar