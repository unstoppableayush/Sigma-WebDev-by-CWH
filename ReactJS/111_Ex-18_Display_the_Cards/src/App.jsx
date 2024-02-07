import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [postmsg, setPostmsg] = useState(null)

  useEffect(() => {
    
    
    const fetchedData = async()=>{
      const posts =await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsObj =await posts.json()
      setPostmsg(postsObj)
    }
    fetchedData()
    
  },[])

  if(postmsg == null){
    return <h1 className='loading'>Post is Loading</h1>;
  }
  
  return (
    <>
    
      { 
      postmsg && postmsg.map((post)=>
      <div className="card ">
      <h2 className="postTitle">{post.title}</h2>
      <p className="postContent">{post.body}</p>
      </div>
      )}
      
    </>
  )
}

export default App
