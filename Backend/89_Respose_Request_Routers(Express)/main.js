console.log("Response , Request and Routers in Express");

/*
    Response , Request and Routers
    -------------------------------
    1. Handling post & other requests
    2. Chaining of requests
    3. Serving HTML files
    4. Installing Postmon
    5. Expres Router

    Method             Description
  ------------       ---------------------
  res.download()       Prompt a file to be download
  res.end()            End the response process.
  res.json()           Send a JSON response
  res.jsonp()          Send a JSON response with JSONP support
  res.redirect()       Redirect a request
  res.render()         Render a view template
  res.send()           Send a response of various types.
  res.sendFile()       Send a file as an octet stream.
  res.sendStatus()     Set the response status code and send its string representation as the response body


*/

const express = require('express')
const blog = require("./routes/blog")
const shop = require("./routes/shop")

const app = express()
const port = 300 

//using middleware
app.use('/' , express.static("public"))

//using the routes
app.use("/blog",blog)
app.use("/shop",shop)

//get request
app.get('/' , (req , res)=>{
    res.send('Hello World')
})

//post request 
app.post('/' , (req , res)=>{
    console.log("Hey its a post request")
    res.send("Hello World Post !")
})



//put request  -> use to update
app.put('/' , (req , res)=>{
    console.log("Hey its a put request")
    res.send("Hello World Put !")
})

//delete request  -> use to delete
app.delete('/' , (req , res)=>{
    console.log("Hey its a delete request")
    res.send("Hello World delete !")
})




// //chaining of request
// app.put('/' , (req , res)=>{
//     console.log("Hey its a put request")
//     res.send("Hello World Put !")
// }).app.delete('/' , (req , res)=>{
//     console.log("Hey its a delete request")
//     res.send("Hello World delete !")
// })


app.get("/index",(req , res)=>{
    console.log("Hey its a index")
    res.sendFile("templates/index.html",{root:__dirname})
})

app.get("/api",(req , res)=>{
    res.json({a:1, b:2 , c:3 , d:4,name:["Ayush" , "Kumar"]})
})


app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})