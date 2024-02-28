"use server"
import fs from "fs/promises"
export const submitAction = async(e) =>{

    "use server"
    console.log(e.get("name") , e.get("add"))
     fs.writeFile("ayush.txt" , `Name:${e.get("name")} , Address: ${e.get("add") } `)
    
    
  }