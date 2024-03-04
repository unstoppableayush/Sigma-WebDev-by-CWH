"use client"
// import { headers } from "next/headers";
import Image from "next/image";

export default function Home() {

  const handleClick = async()=>{

    let data = {
      name: "Ayush",
      role : "Coder"
    }

    let a = await fetch("/api/add" , {
      method: "POST" , 
      headers:{
      "Content-Type" : "application/json",
      },
      body: JSON.stringify(data)
    
    })
    let res = await a.json()
    console.log(res)
  }
  return (
   <div>
    <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
    <button onClick={handleClick}>Click Me</button>
   </div>
  );
}
