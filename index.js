/**
 * Created by Aditya Ekawade on 6/28/2017.
 */


const express = require('express');
const bodyParser = require('body-parser');

//const routes = require('./routes/api');

//Require mongoose
const mongoose = require('mongoose');


// set up express app
const app = express();


//Connect to mongo db
/*
mongoose.connect('localhost:27107/restapidb');
mongoose.Promise = global.Promise;
*/


mongoose.connect('mongodb://localhost/restapidb');
mongoose.Promise = global.Promise;

//Using body-parser middleware
app.use(bodyParser.json());


// Initialize routes
app.use('/api', require('./routes/api'));

//Error handling middleware
//These functions can take upto 4 parameters
app.use(function (err, req, res, next) {
    //console.log(err);
    res.send({error: err._message})
})


// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests');
});




/*
 //Listening for the get request and handling this request in the call back function.
 app.get('/api', function (req, res) {
 console.log("hello");
 res.send({name: "Aditya"})
 });
 */


