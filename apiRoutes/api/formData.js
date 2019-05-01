const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

let url = process.env.DB_URL || "mongodb://localhost:27017/todoEntrySystem";
let collection;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  let db = client.db("todoEntrySystem");
  collection = db.collection("todos");
});

router.get("/", function(req, res) {
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/:id", function(req, res) {
  collection
    .find({ _id: ObjectId(req.params.id) })
    .toArray(function(err, result) {
      res.send(result);
    });
});

router.put("/completeAll", function(req, res) {
  const uncheckedIdListStrings = req.body;
  console.log("string form of list is ", uncheckedIdListStrings);
  const uncheckedTodoIds = uncheckedIdListStrings.map(item => ObjectId(item));
  console.log("uncheckedTodoIds", uncheckedTodoIds);

  collection.updateMany(
    { _id: { $in: uncheckedTodoIds } },
    { $set: { isComplete: true } },
    function(err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.delete("/", function(req, res) {
  collection.deleteMany({ isComplete: true }, function(err, result) {
    res.send(result);
  });
});

router.put("/:id", function(req, res) {
  let newContent = req.body.content;
  let newBool = req.body.isComplete;
  console.log("to be checked item ", newContent);
  console.log("after checked ", newBool);

  collection.updateOne(
    { _id: ObjectId(req.params.id) },
    { $set: { content: newContent, isComplete: newBool } },
    function(err, result) {
      res.send(result);
    }
  );
});

router.post("/", function(req, res) {
  var newContent = {
    content: req.body.content
  };
  collection.insert(newContent, function(err, result) {
    res.send(result);
  });
});

router.delete("/:id", function(req, res) {
  collection.deleteOne({ _id: ObjectId(req.params.id) }, function(err, result) {
    res.send(result);
  });
});

module.exports = router;
