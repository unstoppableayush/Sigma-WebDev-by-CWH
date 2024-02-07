import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Ayush")
  const [form, setform] = useState({email:"",phone:""})

  const handleClick = () =>{
    alert("Hey I am clicked")
  }

  const handleMouseOver = () =>{
    alert("Hey I am mouse over")
  }

  const handleChange = (e)=>{
    setName(e.target.value)
  }

 // using one handleChange we are changing the value of different input text
  const handleChangeBtn = (e)=>{
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      
      
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>I am a red div</div>

      <input type="text" value={name} onChange={handleChange} /><br /><br />
      <input type="text" value={form.email ? form.email : ""} name='email' onChange={handleChangeBtn}/>
      <input type="text" value={form.phone ? form.phone : ""} name='phone' onChange={handleChangeBtn}/>
      
      {/* if form.email is present the keep that otherwise use blank */}
       
    </>
  )
}

export default App
