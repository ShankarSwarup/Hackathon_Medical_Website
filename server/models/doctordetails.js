const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
    "docname":{
        type:String,
        required:true
    },
    "hospitalname":{
        type:String,
        required:true
    },
    "city":{
        type:String,
        required:true
    },
    "state":{
        type:String,
        required:true
    },
    "country":{
        type:String,
        required:true
    },
    "phn":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "starttime":{
        type:String,
        required:true
    },
    "endtime":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    },
    "specialization":{
        type:Array,
        required:true
    }
});



const DoctorModel = mongoose.model('docdetails',DoctorSchema);
module.exports = DoctorModel;