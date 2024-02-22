import { useState ,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  // const [count2, setcount2] = useState(second)
  const [adjective, setadjective] = useState("good")

  // const getAdjective = () =>{
  //   // return "another"
  //   return "another" + count
  // }

  // whenever the app component render getAdjective treated as new function
  // that's why getAdjective treated as a new prop and component renders again and memo doesn't works

  //when we write two same function in javascript then they don't equals to each other

  //why? 
  /*
    In JavaScript, two functions are never equal to each other even if they have the same name and body. This is because functions are objects, and objects are compared by reference, not by value. This means that two functions are only equal to each other if they are the same object, not just if they have the same properties and values.
  */

  // Then to solve we use useCallback -> It freezes or memoize the function 

  const getAdjective = useCallback(
    () => {
      return "another" + count
    },
    [count],  //freeze untill count doesnot changes
  )
  

  

  return (
    <>
    <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div>
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
