const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

var todos = [];
var counts = 0;
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/todo", function (req, res) {
  res.json(todos);
});

app.post("/todo", function (req, res) {
  res.send(todos);
});

app.get("/count", function (req, res) {
  res.json(counts);
});

app.post("/count", function (req, res) {
  counts++;
  res.send(counts.toString());
});

app.listen(3001);
