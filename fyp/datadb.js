const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        required:true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    status:
    {
        type:Boolean,
        default:false
    },
    coin:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
});

const Student = module.exports = mongoose.model('Data', DataSchema);