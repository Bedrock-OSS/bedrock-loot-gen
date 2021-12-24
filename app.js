var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/loot_table.json',function(req,res) {
  res.sendFile(__dirname + '/public/loot_table.json');
});

app.listen(80, function () {
});

app.get('/styles.css',function(req,res) {
  res.sendFile(__dirname + '/public/styles.css');
});