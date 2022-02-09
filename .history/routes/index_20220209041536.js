var express = require('express')
const { DBRef } = require('mongojs')
var router = express.Router()


//set router for the home page

//get request
 router.get('./client/src/index.html', (req,res,next)=>{

    res.render("index.html")


 })

 

 module.exports=router