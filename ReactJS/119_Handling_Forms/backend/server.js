import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

const port = 3000
app.use(cors())
app.use(bodyParser.json())
 

app.get('/' , (req, res)=>{
    res.send("hello World")
})

app.post('/' , (req, res)=>{
    console.log(req.body)
    res.send("hello World")
})

app.listen(port , ()=>{
    console.log(`App listening on port ${port}`)
})