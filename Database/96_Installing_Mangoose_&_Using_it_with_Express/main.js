import mongoose  from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";


let a = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
let port = 3000

app.get('/',(req,res)=>{
    const todo = new Todo({title :"Hey first todo" , desc:"Description of this todo" , isDone:false , days:Math.floor(Math.random()*45 + 5 * Math.random())})
    todo.save()
    res.send('Hello World!')
})

app.get('/a',async(req , res)=>{
    let todo =await Todo.findOne({})
    res.json({title:todo.title ,desc:todo.desc })
})

app.listen(port , ()=>{
    console.log(`Example app listening on poer ${port}`)
})