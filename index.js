/**
 * Created by Aditya Ekawade on 6/28/2017.
 */


const express = require('express');

//const routes = require('./routes/api');


// set up express app
const app = express();

app.use('/api', require('./routes/api'));


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


