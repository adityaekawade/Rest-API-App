/**
 * Created by Aditya Ekawade on 6/28/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ContentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    role: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});


//Create Model
const Content = mongoose.model('content', ContentSchema );

module.exports = Content;
