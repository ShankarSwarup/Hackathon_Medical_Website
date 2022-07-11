const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    "docname":{
        type:String,
        required:true
    },
    "hospitalname":{
        type:String,
        required:true
    },
    "username":{
        type:String,
        required:true
    },
    "city":{
        type:String,
        required:true
    },
    "date":{
        type:String,
        required:true
    },
    "slottime":{
        type:String,
        required:true
    },
    "status":{
        type:String,
        required:true
    },
    "useremail":{
        type:String,
        required:true
    },
    "userphn":{
        type:String,
        required:true
    },
    "opd":{
        type:Array,
        required:true
    },
    "desc":{
        type:"string"
    }
});


const AppointmentModel = mongoose.model('appdetails',AppointmentSchema);
module.exports = AppointmentModel;