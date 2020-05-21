//Loads body parser 
var bodyParser = require('body-parser');
//Sets up mongoose
var mongoose = require('mongoose');
//Connect to the database Bartek1993%21
mongoose.connect('mongodb+srv://bkalan011:Bartek1993%21@cluster0-l35of.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
//Create a schema
var todoSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo', todoSchema);

/*Dummy data 
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];*/

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Sets up request handlers
module.exports = function(app){


//Handles get requests()
app.get('/todo', function(req, res){
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});
    })
    

});
//Handles post requests(when user adds something to the list)
app.post('/todo', urlencodedParser, function(req, res){
//get data from the view and add it to mongodb
var newTodo = Todo(req.body).save(function(err,data){
    if (err) throw err;
    res.json(data);
})
});
//Handles delete requests(allows user to delete items of the list).
app.delete('/todo/:item', function(req, res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        if (err) throw err;
        res.json(data);
    })
 });
};
