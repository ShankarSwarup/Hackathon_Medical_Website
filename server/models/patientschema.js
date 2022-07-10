const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "phn":{
        type:String,
        required:true
    },
    "bloodgroup":{
        type:String,
        required:true
    },
    "gender":{
        type:String,
        required:true
    },
    "dob":{
        type:String,
        required:true
    },
    "country":{
        type:String,
        required:true
    },
    "state":{
        type:String,
        required:true
    },
    "city":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    }
});



const patientsModel = mongoose.model('patientdetails',patientSchema);
module.exports = patientsModel;