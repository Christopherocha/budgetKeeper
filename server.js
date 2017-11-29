var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

// initialize express
const app = express();

app.set('port', process.env.PORT || 8080);

// use morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride("_method"));
app.use(express.static("public"));
var routes = require("./controllers/routes.js")
app.use("/", routes);

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
//var mongodbUri = '';
 
// mongoose.connect(mongodbUri, options);
// var db = mongoose.connection;             
 
// db.on('error', console.error.bind(console, 'connection error:'));  
 
// db.once('open', function() {
//   // Wait for the database connection to establish, then start the app.
//   console.log('Connected to '+ mongodbUri);                         
// });

server.listen(app.get('port'), function() {
  console.log("App running!");
});