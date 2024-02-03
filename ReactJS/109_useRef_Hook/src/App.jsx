import { useState , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useRef is used to persist the value at the time of re-render

  // const a = useRef(0);

  // let a = 0;

  //when we change the Ref then component does not re-render

  // useEffect(() => {
  //   // a= a+1;
  //   a.current = a.current + 1;
  //   console.log(`rerendering and the value of a is ${a.current}....`);
  // });

  const btnRef = useRef()

  useEffect(() => {
      console.log(`First rendering...`)
      btnRef.current.style.backgroundColor = "red"

      //we can access the dom element inside ref

  },[]);
  

  return (
    <>
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
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* using ref */}
      <button onClick={()=>{btnRef.current.style.display = "none"}}>Change me</button>
    </>
  )
}

export default App
