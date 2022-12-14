const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const { default: Axios } = require("axios");
const router = express.Router();

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({ type: "application/json" }));
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// 전체 허용
app.use(cors());

let todos = [];
let counts = 0;

app.get("/todo", function (req, res) {
  res.json(todos);
});

app.post("/todo", function (req, res) {
  todos.push(req.body);
  res.send(todos);
});

app.delete("/todo", function (req, res) {
  const findInex = todos.find((todo) => todo.id === req.body.Id);
  const index = todos.indexOf(findInex);
  todos.splice(index, 1);
  res.json(todos);
});

app.delete("/todoEntry", function (req, res) {
  todos = [];
  res.json(todos);
});

app.put("/todoInputValue", function (req, res) {
  const findIndex = todos.find((todo) => todo.id === req.body.data.Id);
  findIndex.inputValue = req.body.data.InputValue;
  res.json(todos);
});

app.put("/todoCheckValue", function (req, res) {
  const findIndex = todos.find((todo) => todo.id === req.body.data.Id);
  findIndex.check = !findIndex.check;
  res.json(todos);
});

app.get("/count", function (req, res) {
  res.json(counts);
});

app.post("/count", function (req, res) {
  counts++;
  res.send(counts.toString());
});

app.get("/getBoardList", function (req, res) {
  const boardList = () => {
    return Axios.get("http://board-www.board.com/Board/IndexBoardList");
  };
  console.log(boardList());
});

app.listen(3001);
