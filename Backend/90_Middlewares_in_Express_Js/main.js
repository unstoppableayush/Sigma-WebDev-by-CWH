const express = require("express")
const fs = require("fs")
const blog = require('./routes/blog')
const app = express()
const port = 3000

//built in middleware
app.use(express.static("public"))

app.use('/blog',blog)

//to make middleware make a function and use inside app.use()
const myLogger = function(req , res , next){
    console.log("Logged");
    console.log(req.headers);

    req.ayush = "I'm Ayush" ; //modifying the request
    fs.appendFileSync("logs.txt" ,`${Date.now()} is a ${req.method}\n`);

    // res.send("Hacked by Middleware 1")

    next();          //passes control to the next middleware  
}
app.use(myLogger);


// If we don't use next() then request will be left hanging

//2nd middleware
app.use((req,res,nexta)=>{
    console.log("Logger2");
    nexta();   //passing the control to route handler
})


app.get("/" , (req , res)=>{
    res.send("Hello World")
})

app.get("/about" , (req , res)=>{
    res.send("Hello About "+req.ayush) //accesing the modified request
})

app.get("/contact" , (req , res)=>{
    res.send("Hello contact")
})

/*
        Types of Middleware
     ------------------------------
     1.Application level middleware -> app.use()
     2.Router Level Middleware -> used in specific router
     3.Error handling Middleware
     4.Built in middleware -> express.static , express.json , express.urlencoded
     5.Third party middleware -> using others middleware


*/

app.listen(port , ()=>{
    console.log(`Express app listening on port ${port}`)
})