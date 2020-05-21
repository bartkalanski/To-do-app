//Sets up request handlers
module.exports = function(app){

//Handles get requests()
app.get('/todo', function(req, res){
    res.render('todo');

});
//Handles post requests(when user adds something to the list)
app.post('/todo', function(req, res){

});
//Handles delete requests(allows user to delete items of the list).
app.delete('/todo', function(req, res){

});
};
