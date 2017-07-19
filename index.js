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
var uristring = process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/restapidb';

*/

    mongoose.connect('mongodb://heroku_ltjg7t5s:nvl5a5afl1deor21s35ceoa003@ds129028.mlab.com:29028/heroku_ltjg7t5s', function (err, res) {
        if (err) {
            console.log(err);
        }
    });
    mongoose.Promise = global.Promise;


app.use(express.static('public'));

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


