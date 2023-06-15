import { MongoClient } from "mongodb"; // getting function from library
import { mongoUri } from "./secrets.js"; //getting our secret connection string

const connection = new MongoClient(mongoUri);//connecting to our cluster using our secret connection string

await connection.connect(); //opening connection to our cluster

const db = connection.db('Cluster0'); //connection to specific database

await db.collection('students').insertOne({name: 'John Therlonge', age: 26}); // add student

const results = await db.collection('students').findOne({name: 'John Therlonge'}); // get student

console.log(results);

connection.close(); //disconnect


