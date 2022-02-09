
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
 //Get single task by id
 router.get('/tasks/:id', (req,res,next)=>{

   db.tasks.findOne({_id:mongojs.ObjectID(req.params.id)},(err, task)=>{
      if(err){
         res.send(err)
      }
      res.json(task)

   })

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

 //Delete task by id
 router.delete('/tasks/:id', (req,res,next)=>{

   db.tasks.remove({_id:mongojs.ObjectID(req.params.id)},(err, task)=>{
      if(err){
         res.send(err)
      }
      res.json(task)

   })

})


//Update task by id
router.put('/tasks/:id', (req,res,next)=>{

     var task =req.body
     var updTask = {}
   if(task.isDone){
      updTask.isDone = task.isDone

   }

   if(task.title){
      updTask.title = task.title

   }
   if(!updTask){
      res.status(400)
      res.json({
         "error":"Bad Data"
      })
   }else{

      db.tasks.update({_id:mongojs.ObjectID(req.params.id)},updTask,{},(err, task)=>{
         if(err){
            res.send(err)
         }
         res.json(task)
   
   
   
   })


   }

  
})








 module.exports=router







