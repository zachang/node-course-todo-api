// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
let url = "mongodb://localhost:27017/Todoapp";

MongoClient.connect(url, (err, db) =>{
  if(err){
    return console.log("Unable to connect to mongoDB server", err);
  }
  console.log("Connected to mongoDB server");

  // db.collection("Todos").find({
  //     _id:new ObjectID("597073a774eb2723eef113e9")
  //   }).toArray().then((docs) =>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log("Unable to fetch from Todos", err);
  // });

  db.collection("Users").find({
      name:"Ebenezer"
    }).toArray().then((docs) =>{
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log("Unable to fetch from Todos", err);
  });

  db.collection("Users").find().count().then((count) =>{
    console.log(`Todos count: ${count}`);
  },(err) => {
    console.log("Unable to fetch from Todos", err);
  });

  db.close();
});
