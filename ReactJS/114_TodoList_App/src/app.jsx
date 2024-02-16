import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';




export function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleEdit = ()=>{

  }

  const handleDelete = (e,id) =>{
    console.log(id);
    const newTodos = todos.filter(item=>{
      console.log(item.id)

      return item.id != id
    });
    console.log(newTodos)
    settodo(newTodos);
  }

  const handleChange = (e) =>{
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
     let id = e.target.name;
      todos.filter((todo)=>{
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted;
        }
      })
      settodo([...todos])
      // console.log(todos)
      // console.log(e.target.name)

      // // same -> Code with harry
      // let index = todos.findIndex(item =>{
      //   return item.id === id;
      // })
      // let newTodos = [...todos];
      // newTodos[index].isCompleted = !newTodos[index].isCompleted;
      // settodo(newTodos);

   }

  const handleAdd = () =>{
    settodos([...todos, {id : uuidv4(), todo , isCompleted : false}])
    settodo("")
    // console.log(todos)
  }
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-80"/>
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md m-6'>Add</button>
        </div>
        
          {todos.length === 0 && <div>No Todos to display</div>}
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.map(item=>{

            
             return <div className="todo flex justify-between w-1/2 my-3">

              <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted}  />
              <div className={item.isCompleted? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'>Edit</button>
                <button onClick={(e)=>{handleDelete( e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'>Delete</button>
              </div>

            </div>
            })}
          </div>
      </div>
      
    </>
  )
}
