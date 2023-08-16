const express = require("express");
const router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: "3307",
  database: "nodejs",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

router.post("/save", (req, res) => {
  var responseData = req.body;
  var sql = `INSERT INTO users (username, age) VALUES ('${responseData.name}', '${responseData.age}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    var returndata = { status: "Sucess", msg: "Created" };
    res.send(returndata);
  });
});

router.get("/getuserdata", (req, res) => {
  var sql = `select * from users where status = 1`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/getuserdataid", (req, res) => {
  var responseData = req.body;
  var sql = `select * from users where id='${responseData.id}' and  status = 1`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/updateuserData", (req, res) => {
  var responseData = req.body;
  var sql = `update users set username='${responseData.name}',age ='${responseData.age}' where id='${responseData.id}' and  status = 1`;
  con.query(sql, function (err, result) {
    if (err) throw res.send(err);
    var returndata = { status: "Sucess", msg: "Updated" };
    res.send(returndata);
  });
});

router.post("/deleteuser", (req, res) => {
  var responseData = req.body;
  var sql = `delete from users where id='${responseData.id}' and  status = 1`;
  con.query(sql, function (err, result) {
    if (err) throw res.send(err);
    var returndata = { status: "Sucess", msg: "Updated" };
    res.send(returndata);
  });
});

module.exports = router;
