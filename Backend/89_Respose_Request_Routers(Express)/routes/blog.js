const express = require("express")
const router = express.Router()


//define the home page route
router.get("/" , (req , res)=>{
    res.send("Blog home page")
})

//define the above route
router.get("/about" , (req, res)=>{
    res.send("About Blog")
})

//define the above route
router.get("/blogpost/:slug" , (req, res)=>{
    res.send(`Fetch the blogpost ${req.params.slug}`)
})

module.exports = router