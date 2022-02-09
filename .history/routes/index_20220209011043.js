var express = require('express')
var router = express.Router()

//set router for the home page

//get request
 router.get('/', (req,res,next)=>{

    res.render("Index Page")
 })


 module.exports=router