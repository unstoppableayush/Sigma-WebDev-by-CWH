import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
 }, [count])

 

/*

  // Once a time when a site loads
  useEffect(() => {
     alert("Hey Welcome to my page")
  }, [])

// used when particular change in state or prop
  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
 }, [count])


 useEffect(() => {
  alert("First was changed")
}, [first])
  
 
*/
  return (
    <>
      <div>
        <Navbar color={"navy " + "blue" + color}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
