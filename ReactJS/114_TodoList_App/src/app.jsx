import { useState , useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [ShowFinished, setShowFinished] = useState(true)

  useEffect(()=> {

    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);

    }
  }, [])

  // if(todos.length === 0){
  //   localStorage.clear();
  // }
  
  const saveToLS = () =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = ()=>{
    if(todos.length == 0){
      setTodo("");
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    
    console.log(todos);
    saveToLS();
    
    
  }

  const toggleFinished = (e) => { 
      setShowFinished(!ShowFinished)
     }

  const handleEdit = (e,id)=>{
    
   let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    handleDelete(null , id);

    
  }

  const handleDelete = (e,id)=>{

    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    
    saveToLS();
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
     let id = e.target.name;
      todos.filter((todo)=>{
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted;
        }
      })
      setTodos([...todos])
      saveToLS();
      
      // console.log(todos)
      // console.log(e.target.name)

      // // same -> Code with harry
      // let index = todos.findIndex(item =>{
      //   return item.id === id;
      // })
      // let newTodos = [...todos];
      // newTodos[index].isCompleted = !newTodos[index].isCompleted;
      // setTodo(newTodos);

   }

  
  return (
    <>
    <Navbar/>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-2/3">
        <h1 className='font-bold text-center text-xl '>iTask - Manage your todos at one place</h1>
        <div className="addTodo">
          <h2 className='text-lg font-bold mt-2'>Add a Todo</h2>        
          <input onChange={handleChange} value={todo} type="text" className="w-full rounded-lg mt-3 p-1"/>
          <button onClick={handleAdd} disabled={todo.length <= 2} className=' disabled:bg-gray-700 bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm mx-auto text-white rounded-md m-5 w-full'>Add</button>
        </div>
        
          {todos.length === 0 && <div>No Todos to display</div>}

          <input onChange={toggleFinished} id='show' type="checkbox" checked={ShowFinished} /> 
          <label htmlFor="show">Show Finished</label>
          
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">

            {todos.map(item=>{
            
             return (ShowFinished || !item.isCompleted) && (<div key={item.id} className="todo flex justify-between md:w-3/5 my-3">

              <div className='flex gap-8'>
              <input onChange={handleCheckbox} type="checkbox" name={item.id} checked={item.isCompleted} />
              <div className={item.isCompleted? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="button flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete( e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 font-bold py-1 text-sm text-white rounded-md mx-1'><MdDelete /></button>
              </div>

            </div>)

            })}

          </div>
      </div>
      
    </>
  )
}
