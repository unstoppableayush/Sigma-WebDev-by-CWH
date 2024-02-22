import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar count={count} />
      <div>
    <button onClick={() => dispatch( increment() 

    //  incrementByAmount(7) 

      )}>+</button>
    
    Currently Count is {count}

    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(multiply())}>*</button>

      </div>
    </>
  )
}

export default App
