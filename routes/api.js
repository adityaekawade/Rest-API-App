/**
 * Created by Aditya Ekawade on 6/28/2017.
 */


const express = require('express');
const router = express.Router();

const Content = require('../models/content');

const Ninja = require('../models/ninja');


const Item = require('../models/Item');


//get data from database
router.get('/data', function (req, res, next) {
    Content.find({}).then(function (data) {
        res.send(data);
    })
    //res.send({type:'GET'})   //sending back a simple object
})



//get data from  Items

router.get('/item', function (req, res, next) {
    Item.find({}).then(function (data) {
        res.send(data);
    })
    //res.send({type:'GET'})   //sending back a simple object
})



//search item

router.get('/specificItem', function (req, res, next) {
    Item.find({barCodeNumber:req.query.barCodeNumber}).then(function (data) {
        res.send(data);
    })
    //res.send({type:'GET'})   //sending back a simple object
})


router.get('/specificData', function (req, res, next) {
    Content.find({available:req.query.available}).then(function (data) {
        res.send(data);
    })
    //res.send({type:'GET'})   //sending back a simple object
})

//Adding new data

router.post('/data', function(req, res, next){
    Content.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});


router.post('/item', function(req, res, next){
    Item.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});


//Update data from database
router.put('/data/:id', function (req, res, next) {
    Content.findByIdAndUpdate({_id:req.params.id},req.body).then(function () {
        Content.findOne({_id:req.params.id}).then(function (data) {
            res.send(data);
        });

    });
    //res.send({type:'PUT'})
});


// Deleting data from database
router.delete('/data/:id', function (req, res, next) {
    //console.log(req.params.id);

    Content.findByIdAndRemove({_id: req.params.id}).then(function (data) {
        res.send(data); //Will show the id that we deleted.
    });
    //res.send({type:'DELETE'})
});


module.exports=router;
