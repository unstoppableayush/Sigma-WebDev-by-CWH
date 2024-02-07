import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () =>{
    alert("Hey I am clicked")
  }

  const handleMouseOver = () =>{
    alert("Hey I am mouse over")
  }

  return (
    <>
      
      
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
       
    </>
  )
}

export default App
