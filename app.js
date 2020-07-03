var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/person.json',function(req,res) {
  res.sendFile(__dirname + '/person.json');
});

app.get('/echo.json',function(req,res) {
  res.sendFile(__dirname + '/echo.json');
});

app.get('/loot_table.json',function(req,res) {
  res.sendFile(__dirname + '/loot_table.json');
});

app.get('/item.json',function(req,res) {
  res.sendFile(__dirname + '/item.json');
});

app.get('/basic_person.json',function(req,res) {
  res.sendFile(__dirname + '/basic_person.json');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/style.css',function(req,res) {
  res.sendFile(__dirname + '/style.css');
});