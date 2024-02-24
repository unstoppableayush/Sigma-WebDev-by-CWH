const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine' , 'ejs')

app.get('/' , (req, res)=>{
    let siteName = "Addidas"
    let searchText = "Search Now"
    let arr = ["Hey , 54 , 65"]
    res.render("index" ,{siteName:siteName , searchText:searchText ,arr});
})

app.get('/blog/:slug' , (req , res)=>{
    let blogTitle = "Adidas why and when"
    let blogContent = "It's a very good brand"
    res.render("blogpost" ,{blogTitle:blogTitle , blogContent:blogContent});
    
})
app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})