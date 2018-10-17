/****************************************************
MODULE IMPORTS
****************************************************/
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const dummyDataArray = require('./dummyData.js');
const _ = require('underscore');
const path = require('path');
/****************************************************
GET CONNECTION TO DATABASE
****************************************************/
const dbURL = 'mongodb://localhost:27017';
const dbName = 'checkout';
var db;

MongoClient.connect(dbURL, (err, client) => {
  if (err) {
    console.log(err);
  }

  console.log('Successfully connected to mongod server...');

  db = client.db(dbName);
  console.log('DB EXISTS:', db instanceof mongodb.Db);

  resetDummyData();//

});

/****************************************************
DATABASE TESTER FUNCTIONS
****************************************************/

function resetDummyData() {
  deleteCollection('transactions', () => {
    const collection = db.collection('transactions');
    console.log('COLLECTION EXISTS:', collection instanceof mongodb.Collection);

    collection.insertMany(dummyDataArray, (err, dbRes) => {
      console.log('DUMMY DATA ADDED:', dbRes.result.ok === 1); //
    });
  });
}

function deleteCollection(collectionName, callback) {
  const collection = db.collection(collectionName);
  collection.drop((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`DROP OLD DUMMY:`, result);
    callback();
  });
}

function checkDummyData(collectionName, callback) {
  const collection = db.collection(collectionName); 
  collection.find({}).toArray((err, docs) => {
    console.log('FOUND CORRECT DUMMY DATA:', docs.length === dummyDataArray.length);
  })
}

/****************************************************
EXPRESS SETUP APP
****************************************************/

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname,'public')));

/****************************************************
API
****************************************************/

app.get('/', (req, res) => res.send('hello world'));

/****************************************************
START EXPRESS SERVER
****************************************************/

app.listen(port, () => console.log(`server listening on port ${port}...`));
