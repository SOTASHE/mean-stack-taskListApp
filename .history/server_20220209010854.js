 //express 

 var express = require("express")

 //path module

 var path = require("path")

//bodyParser to handle data

var bodyParser = require("body-parser")

//index home page

var index = require("./routes/index")

//Tasks api from MongoDB

var tasks = require("./routes/tasks")
var port = 3000


//main app

var app = express()

//view Engine

app.set('views',path.join(__dirname,'views'))

app.set('view engine','ejs')
app.engine('html', require('ejs').renderFile)

// set static folder

app.use(express.static(path.join(__dirname,'client')))

//body parser MW

app.use(bodyParser.json())
app.use (bodyParser.urlencoded({extended:false}))

app.use('/', index)
app.use('/api',tasks)


//listen to port 3000

app.listen(port,()=>{
    console.log('Server started on port'+ port)
})


