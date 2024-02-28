"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";


export default function Home() {

  let ref = useRef()
  

  return (
    <div  className="flex justify-center items-center h-[100vh] bg-blue-600">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div className="p-3 ">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-3" type="text" />
        </div>
        
        <div className="pb-3 ">
          <label htmlFor="name">Address</label>
          <input name="add" id="add" className="text-black mx-1.5" type="text" />
        </div>
        <div>
          <button className="border px-3 ">Submit</button>
        </div>
      </form>
    </div>
  );
}
