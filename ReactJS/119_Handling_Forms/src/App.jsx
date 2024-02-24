import { useState } from 'react'
import { useForm } from "react-hook-form"

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  const {
    register,
    setError,
    handleSubmit,
    watch,
    
    formState: { errors , isSubmitting},
  } = useForm();
  
  const delay = (d) =>{
    return new Promise((res , rej)=>{
      setTimeout(()=>{
        res()
      }, d*1000)
    })
  }
 const onSubmit = async (data) =>{
  await delay(2) //simulating network delay
  console.log(data)

  // if(data.username !== "ayush"){
  //   setError("myform" ,{message:"Username is invalid"})
  // }
  // if(data.username === "rohan"){
  //   setError("blocked" ,{message:"Sorry this user is blocked"})
  // }
  
 }
  return (
    <>
    {isSubmitting && <div>Loading..</div>}
     <div className="conatiner">
      <form action="" onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='username' {...register("username" , { required: {value: true , message:"This field is required"}  , minLength:{ value:3 , message:"Min length is 3" } , maxLength:{ value:8 , message : "Max length is 8"}}) }  />
        {errors.username && <div className='red'> {errors.username.message}</div>}
       <br />

        <input placeholder='password' {...register("password" ,{minLength:{value:7 , message:"Password min length should be 7"}})}  />
        {errors.password && <div className='red'> {errors.password.message}</div>}

        <br />
        <input disabled={isSubmitting} type="submit" value="submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div> }
        {errors.blocked && <div className='red'>{errors.blocked.message}</div> }

      </form>
     </div>
    </>
  )
}

export default App
