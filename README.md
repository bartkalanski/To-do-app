# To-do-app
express.js practice
To do list app day 1
-created styles.css with some basic css.
-created todo-list.js which handles Ajax request to post or delete items from my to do application.
-created package.json file.
-installed express.js package.
-installed ejs package.
-installed body parser. 

To do list app day 2
-created app.js file, entry point to the application.
-set up the app using express
-set up view engine
-set up static files using the built in middleware into express called express.static
-listened to the port 
-created controller for our to do list so we can handle the routes and the rendering of views and passing of data to views in this controller. Keeping the code modular 
-required that controller in app.js by storing it in the variable then fired it passing app as parameter so we can use get/post/delete requests.

To do list app day 2.1
-created views folder and todo.ejs file
-created html lay out in todo.ejs
-rendered todo to app.get

To do list app day 2.2
-created dummy data 
-added ability to add items
-added ability to remove items

To do list app day 2.3
-created database on mongoDB
-used mongoose to connect to the database
-created a schema 
-created a new model and passed that model a schema
-created a new item of type this model and passed that object through and saved it to the database 

To do list app day 2.4
-successfully connected all the functionality with the database.
