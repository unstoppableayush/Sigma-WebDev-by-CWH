import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn , setshowbtn] = useState(false)
  const [todos , setTodos] = useState([
    {
    title:"Hey",
    desc:"I am a good todo"
    },
    {
      title:"Hey another todo",
      desc:"I am a good todo"
    },
    {
      title:"Hey I am grocery todo",
      desc:"I am a good todo"
    },

  ])


  const Todo = ({todo})=>{ 
    return (<> 

    <div className="m-4 border-1 border border-purple-400">
      <div className="todo">{todo.title}</div> 
      <div className='todo'>{todo.desc}</div>
    </div>

    

    </>) }

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

      {/* Conditional rendering */}
      {showbtn?<button>Showbtn is true</button> : <button>showbtn is false</button>}

      {/* {showbtn && <button>Showbtn is true</button>} */}


      {todos.map(item=>{

        return <Todo key={item.title} todo={item}/>

      //  return (<div className="m-4 border-1 border border-purple-400">
      //  <div className="todo">{todo.title}</div> 
      //  <div className='todo'>{todo.desc}</div>
      // </div>)


      })}

      {/* <Todo></Todo> */}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle Showbtn
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
