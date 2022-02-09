var express = require('express')
var router = express.Router()

//set router for the home page

//get request
 router.get('/tasks', (req,res,next)=>{

    res.send("TASK API")
 })


 module.exports=router