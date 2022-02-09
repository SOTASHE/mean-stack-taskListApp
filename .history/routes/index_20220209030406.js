var express = require('express')
const { DBRef } = require('mongojs')
var router = express.Router()

//set router for the home page

//get request
 router.get('/', (req,res,next)=>{

    res.render("index.html")
 })

 //save task

 router.post('/task',(req,res,next)=>{

   var task = req.body

   if(!task.title || (task.isDone + '') ){
      res.status(400)
      res.json({
         "error": "bad data"
      })
   }else{
      DBRef.tasks.save(task,(err,task)=>{
         if(err){
            res.send(err)
         }res.json(err)
      })
   }

 })

 module.exports=router