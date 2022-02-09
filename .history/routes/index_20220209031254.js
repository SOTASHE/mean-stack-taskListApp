var express = require('express')
const { DBRef } = require('mongojs')
var router = express.Router()

//set router for the home page

//get request
 router.get('/', (req,res,next)=>{

    res.render("index.html")
 })

 

 module.exports=router