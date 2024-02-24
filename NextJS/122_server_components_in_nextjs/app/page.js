// "use client"
// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"

import fs from "fs/promises"
export default function Home() {

  // const [count, setcount] = useState(0)

  //running in server side
  console.log("Hey I am Ayush") 
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Navbar/>
      <br />
      
      I am a component 
      {/* running in user client dside */}

      {/* {count} */}
      <br />
      {/* <button className="ms-5 border border-red-50 bg-slate-900 rounded-md" onClick={()=> setcount(count+1)}>Cilck me</button> */}

    </div>
  );
}
