var express = require('express');
var todoController = require('/Users/bartkalanski/Desktop/Coding Projects/Node/express-app/controllers/todoController.js');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3002);
console.log('You are listening to port 3002');
