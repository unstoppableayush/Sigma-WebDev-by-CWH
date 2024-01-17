const express = require('express')
const mongoose = require('mongoose')
const Employee = require("./models/employee.js")

const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/Company')
app.set('view engine' , 'ejs');

const getrandom = (arr)=>{
    let rn = Math.floor(Math.random()* (arr.length - 1))
    return arr[rn]
}

app.get('/', (req,res)=>{
    res.render('index' , {foo:'FOO'})
})

app.get('/generate' , async(req , res)=>{
    //clear the collection employee
    await Employee.deleteMany({})
    //Genrate random data

    let randomName = ["Rohan" , "Sohan" , "Mohan" , "Sohan"] 
    let randomLang = ["Python" , "JS" , "C++" , "Java"]
    let randomCities =["Bilaspur", "Moradabad" , "Mysore" , "Kolkata"]
    for(let i=0 ; i<10 ; i++){
        let e =await Employee.create({
            name:getrandom(randomName),
            salary:Math.floor(Math.random()*22000),
            language:getrandom(randomLang),
            city:getrandom(randomName),
            isManager: Math.random()>0.5 ? true : false
        })

        
    }
    res.render('index' , {foo:'FOO'})
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})