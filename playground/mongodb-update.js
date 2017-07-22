// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
let url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) =>{
  if(err){
    return console.log("Unable to connect to mongoDB server", err);
  }
  console.log("Connected to mongoDB server");

  // db.collection('Todos').findOneAndUpdate({
  //   "_id" : ObjectID("5970b82174eb2723eef14cf3")
  // },{
  //     $set:{
  //       completed:true
  //     }
  // },{
  //     returnOriginal:false
  // }).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    "_id" : ObjectID("596fdf5d11fd8e225c714bc9"),
  },{
      $set:{
        name:"Zachang"
      },
      $inc:{
        age:1
      }
  },{
      returnOriginal:false
  }).then((result) => {
      console.log(result);
  });
  db.close();
});
