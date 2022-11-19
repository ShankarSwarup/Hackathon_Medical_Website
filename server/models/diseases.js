const mongoose = require('mongoose')

const DiseaseSchema = new mongoose.Schema({
    "Disease":{
        type:String,
        required:true
    },
    "Description":{
        type:String,
        required:true
    },
});



const DiseaseModel = mongoose.model('diseasedetails',DiseaseSchema);
module.exports = DiseaseModel;