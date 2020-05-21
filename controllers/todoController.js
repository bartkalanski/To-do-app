//Loads body parser 
var bodyParser = require('body-parser');
//Dummy data 
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Sets up request handlers
module.exports = function(app){

//Handles get requests()
app.get('/todo', function(req, res){
    res.render('todo', {todos: data});

});
//Handles post requests(when user adds something to the list)
app.post('/todo', urlencodedParser, function(req, res){
data.push(req.body);
res.json(data);

});
//Handles delete requests(allows user to delete items of the list).
app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);

});
};
