/**
 * Created by Aditya Ekawade on 6/28/2017.
 */


const express = require('express');
const router = express.Router();


//get data from database
router.get('/data', function (req, res) {
    res.send({type:'GET'})   //sending back a simple object
});


//Adding new data
router.post('/data', function (req, res) {
    res.send({type:'POST'})
});


//Update data from database
router.put('/data/:id', function (req, res) {
    res.send({type:'PUT'})
});


// Deleting data from database
router.delete('/data/:id', function (req, res) {
    res.send({type:'DELETE'})
});


module.exports=router;
