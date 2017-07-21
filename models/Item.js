/**
 * Created by Aditya Ekawade on 7/20/2017.
 */

/**
 * Created by Aditya Ekawade on 7/20/2017.
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ItemSchema = new Schema({
    itemNumber: {
        type: String,
        required: [true, 'Number field is required']
    },
    itemName: {
        type: String
    },
    warehouseLocation: {
        type: String
    },
    barCodeNumber: {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    },
    lastCalibrated : {
        type: Date,
        default: Date.now
    }

});


//Create Model
const Item = mongoose.model('item', ItemSchema );

module.exports = Item;
