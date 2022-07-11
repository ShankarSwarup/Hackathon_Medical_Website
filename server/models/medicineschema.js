const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
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
    "useremail":{
        type:String,
        required:true
    },
    "userphn":{
        type:String,
        required:true
    },
    "medicine":[
        {
            "medname":{
                type:String,
                required:true
            },
            "type":{
                type:String,
                required:true
            },
            "medcount":{
                type:Number,
                required:true
            },
            "cost":{
                type:Number,
                required:true
            },
            "parts":[
                {
                    "partname":{
                        type:String,
                        required:true
                    },
                    "desc":{
                        type:String,
                        required:true
                    }
                }   
            ]
        }
    ],
    "totalcost":{
        type:Number,
        required:true
    }
});



const MedicineModel = mongoose.model('meddetails',MedicineSchema);
module.exports = MedicineModel;