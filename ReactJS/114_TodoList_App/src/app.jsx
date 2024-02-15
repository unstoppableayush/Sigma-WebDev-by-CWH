import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className="w-80"/>
          <button className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md m-6'>Add</button>
        </div>
        
          
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">

              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea!</div>
              <div className="buttons">
                <button className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'>Edit</button>
                <button className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'>Delete</button>
              </div>

            </div>
          </div>
      </div>
      
    </>
  )
}
