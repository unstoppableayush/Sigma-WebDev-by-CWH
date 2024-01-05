
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) //making public folder public

//app.get or app.post or app.put or app.delete(path , handler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about' , (req , res)=>{
    res.send('About us')
})

app.get('/contact' , (req , res)=>{
    res.send('Hello contact me !')
})

app.get('/blog' , (req , res)=>{
    res.send('Hello Blog')
})

app.get('/blog/:slug/:second' , (req , res)=>{
    //logic to fetch {slug} from the db

    console.log(req.params) //will output {slug 'intro-to-ayush'}
    console.log(req.query) //will output { mode: 'dark ', ' reg ': ' in' }

    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


