const express = require("express")
const router = express.Router()

//Middle that is specific to this router , It will excutes first
router.use((req, res , next)=>{
    console.log('Time:',Date.now())
    next()
})


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