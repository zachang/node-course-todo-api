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

  db.collection("Users").deleteMany({name:"JJ"}).then((result) => {
    console.log(result);
  });

  // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Users").findOneAndDelete({
  //   _id:new ObjectID("596fdf350c36fa2654adc072")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });
  db.close();
});
