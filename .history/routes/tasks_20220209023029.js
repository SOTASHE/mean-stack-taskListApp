


 const { MongoClient } = require('mongodb');
 const uri = "mongodb+srv://snaye:@Snaye93@cluster0.bkxhn.mongodb.net/mytasklist_snaye?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
 });
 









