import React from 'react'

const page = () => {
  return (
    
    <div>
        Admin Login
        <p>Feel free to login as an Admin</p>
    </div>
  )
}

export default page

// Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Admin Login',
  }
}