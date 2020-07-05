var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/loot_table.json',function(req,res) {
  res.sendFile(__dirname + '/schemas/loot_table.json');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/style.css',function(req,res) {
  res.sendFile(__dirname + '/style.css');
});