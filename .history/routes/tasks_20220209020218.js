var express = require('express')
var router = express.Router()

var mongojs = require("mongojs")

var db = mongojs('mongodb+srv://snaye:@Snaye93@cluster0.bkxhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//set router for the home page

//get request
 router.get('/tasks', (req,res,next)=>{

    res.send("TASK API")
 })


 module.exports=router