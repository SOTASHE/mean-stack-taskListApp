
 var express = require('express')
var router = express.Router()

var mongojs = require('mongojs')

var db = mongojs("mongodb+srv://snaye:@Snaye93@cluster0.bkxhn.mongodb.net/mytasklist_snaye?retryWrites=true&w=majority",['tasks'])

//set router for the home page


//get request
 router.get('/tasks', (req,res,next)=>{

    db.tasks.find((err, tasks)=>{
       if(err){
          res.send(err)
       }
       res.json(tasks)

    })

 })


 module.exports=router







