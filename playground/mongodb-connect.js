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

  // db.collection('Todos').insertOne({
  //     text:"Something to do",
  //     completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));

    db.collection('Users').insertOne({
      name:"Jacob",
      age: 30,
      location:"Lagos"
    }, (err, result) => {
      if(err){
          return console.log('Unable to insert Todo', err);
        }

      console.log(result.ops[0]._id.getTimestamp());
    });

  db.close();
});
