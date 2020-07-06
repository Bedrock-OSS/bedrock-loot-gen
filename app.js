var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/loot_table.json',function(req,res) {
  res.sendFile(__dirname + '/schemas/loot_table.json');
});

app.listen(80, function () {
});

app.get('/style.css',function(req,res) {
  res.sendFile(__dirname + '/style.css');
});