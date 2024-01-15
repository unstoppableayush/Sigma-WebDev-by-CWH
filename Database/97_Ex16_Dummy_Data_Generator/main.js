/*
Generate a dummy data in this format in a collection called employees in a db called company

{
    name:"",
    salary:45,
    language:"Python",
    city:"",
    isManager:true 
}

genrate 10 such records when a button called generate data is clicked!

create an Express app with mongoose to acheive it 

Everytime the button is clicked , you should clear the collection

*/


let name = ["Ayush" ,"Harry" ,"Rohan" , "Mohan" , "Ravi"]

let language = ["C" , "C++" , "Java" , "Python" , "Rust"];

let city = ["Aurngabad" , "Arwal" , "Madhepura" ,"Patna" , "vaisali"]

function random(){
    let ran = Math.floor(Math.random()*5);
    return ran;
}

function ranSallary(){
    let sallary = Math.floor(Math.random()*100000)
    return sallary;
}

function manager(){
    if(ranSallary() > 50000){
        return true;
    }
    else{
        return false;
    }
}


import mongoose  from "mongoose";
import express from "express";
import { Employee } from "./models/Emp.js";


let a = await mongoose.connect("mongodb://localhost:27017/Company")
const app = express()
let port = 3000


app.set('view engine' , 'ejs')


app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/buttonClick', async(req, res) => {
       
      
     let count = await Employee.countDocuments({});
    console.log(count);
    if(count>0){
            await Employee.deleteMany({});
            for(let i= 0 ; i<10 ;  i++){
                const todo = new Employee({name:name[random()] , sallary:ranSallary() , language:language[random()] ,city:city[random()] ,isManager:manager()})
                todo.save()
            }
    }
    else{
            for(let i= 0 ; i<10 ;  i++){
                const todo = new Employee({name:name[random()] , sallary:ranSallary() , language:language[random()] ,city:city[random()] ,isManager:manager()})
                todo.save()
            }
    }
    res.render("index");
});

app.listen(port , ()=>{
    console.log(`Example app listening on poer ${port}`)
})
