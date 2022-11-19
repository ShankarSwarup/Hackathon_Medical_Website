const express= require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = express.Router();
const Patient = require("./models/patientschema");
const Doctor = require("./models/doctordetails");
const Appoint = require("./models/appointment");
const Medicine = require("./models/medicineschema");
const Disease = require("./models/diseases");

dotenv.config();

const port = 3001;

const host = '0.0.0.0';


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log("Connection succesfull")
})


app.listen(process.env.PORT || 5000,host,function(){
    console.log("express server is running on port",process.env.PORT);
})


app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.post("/patreg",async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const phn = req.body.phn;
        const bg = req.body.bg;
        const gender = req.body.gender;
        const dob = req.body.dob;
        const country = req.body.country;
        const state = req.body.state;
        const city = req.body.city;
        const user = await Patient.findOne({"phn":phn});
        if(user)
        {
            return res.json({status:'err',message:'Patient Already there'});
        }
        else
        {
        var pat = new Patient({"name" : name , "email":email , "phn":phn , "bloodgroup":bg , "gender":gender , "dob":dob , "country":country ,"state":state , "city":city ,password: String(phn)});
        pat.save(function (err, book) {
                    if (err) return console.error(err);
        });
        return res.json({status:'ok',message : "Successful !"});
        }
        
    }
    catch(err){
        res.json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/patlogphn",async(req,res)=>{
    try{
        const phn = req.body.phn;
        const password = req.body.password;
        const user = await Patient.findOne({"phn":phn});
        if(user)
        {
            if(user.password === password)
            {
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Details'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No patient'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/patlogemail",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Patient.findOne({"email":email});
        if(user)
        {
            if(user.password === password)
            {
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Details'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No patient'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/patpasschanphn",async(req,res)=>{
    try{
        const phn = req.body.phn;
        const oldpassword = req.body.oldpassword;
        const newpassword =  req.body.newpassword;
        const user = await Patient.findOne({"phn":phn});
        if(user)
        {
            if(user.password === oldpassword)
            {
                user.password = newpassword;
                user.save();
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Password'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No patient'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/patpasschanemail",async(req,res)=>{
    try{
        const email = req.body.email;
        const oldpassword = req.body.oldpassword;
        const newpassword =  req.body.newpassword;
        const user = await Patient.findOne({"email":email});
        if(user)
        {
            if(user.password === oldpassword)
            {
                user.password = newpassword;
                user.save();
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Password'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No patient'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})



app.post("/docreg",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const email = req.body.email;
        const phn = req.body.phn;
        const hospitalname = req.body.hospitalname;
        const specialization = req.body.spec;
        const country = req.body.country;
        const state = req.body.state;
        const city = req.body.city;
        const start = req.body.start;
        const end =  req.body.end;
        const user = await Doctor.findOne({"phn":phn,"email":email});
        if(user)
        {
            return res.status(400).json({status:'error',error:'Doctor Already there'});
        }
        else
        {
        var doc = new Doctor({"docname" : docname , "hospitalname":hospitalname , "email":email,"specialization":specialization, "starttime":start,"endtime":end,"phn":phn, "country":country ,"state":state , "city":city ,password: phn});
        doc.save(function (err, book) {
                    if (err) return console.error(err);
        });
        return res.json({status:'ok',message : "Successful !"});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/doclogemail",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Doctor.findOne({"email":email});
        if(user)
        {
            if(user.password === password)
            {
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Details'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No Doctor'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/docpasschanemail",async(req,res)=>{
    try{
        const email = req.body.email;
        const oldpassword = req.body.oldpassword;
        const newpassword =  req.body.newpassword;
        const user = await Doctor.findOne({"email":email});
        if(user)
        {
            if(user.password === oldpassword)
            {
                user.password = newpassword;
                user.save();
                return res.json({status:'ok',message : "Successful !"});
            }
            else
            {
                return res.status(400).json({status:'error',error:'Entered Wrong Password'});
            }
        }
        else
        {
            return res.status(400).json({status:'error',error:'No Doctor'});
        }
        
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})


app.post("/appoint",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const useremail = req.body.useremail;
        const userphn = req.body.userphn;
        const hospitalname = req.body.hospitalname;
        const date =  req.body.date;
        const slottime =  "-";
        const status =  "pending";
        const username = req.body.username;
        const city = req.body.city;
        const opd = req.body.opd;
        const desc =  req.body.desc;
        var app = new Appoint({"docname" : docname , "useremail":useremail , "userphn":userphn,"hospitalname":hospitalname, "date":date,"slottime":slottime,"status":status, "username":username , "city":city,"desc":desc,"opd":opd});
        app.save(function (err, book) {
                    if (err) return console.error(err);
        });
        return res.json({status:'ok',message : "Successful !"});       
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})


app.post("/selectdoc",async(req,res)=>{
    try{
        const city = req.body.city;
        const opd =  req.body.opd;
        const user = await Doctor.find({"city":city});
        const data = [];
        user.map((x)=>{
            x["specialization"].map((y)=>{
                if(opd === y)
                {
                    data.push(x);
                    return data;
                }
            })
        })
        return res.json({status:'ok',message : "Successful !",doc:data});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/doclist",async(req,res)=>{
    try{
        const user = await Doctor.find();
        const data = [];
        user.map((x)=>{
            y = [];
            y.push(x["docname"]);
            y.push(x["city"]);
            y.push(x["hospitalname"]);
            y.push(x["email"]);
            y.push(x["phn"]);
            data.push(y)
        })
        return res.json({status:'ok',message : "Successful !",doc:data});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/docdetails",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const docemail = req.body.docemail;
        const docphn = req.body.docphn;
        const hospitalname = req.body.hospitalname;
        const user = await Doctor.find({"docname":docname,"email":docemail,"phn":docphn,"hospitalname":hospitalname});
        return res.json({status:'ok',message : "Successful !",doc:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload!",token : false})
    }
})

app.post("/docremove",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const docemail = req.body.docemail;
        const docphn = req.body.docphn;
        const hospitalname = req.body.hospitalname;
        Doctor.findOneAndDelete({"docname":docname,"email":docemail,"phn":docphn,"hospitalname":hospitalname}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        });
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Doctor not Removed!",token : false})
    }
})

app.post("/acceptappoint",async(req,res)=>{
    try{
        const email = req.body.useremail;
        const slotdate = req.body.slotdate;
        const slottime =  req.body.slottime;
        const user = await Appoint.findOne({"useremail":email,"slotdate":slotdate});
        user.slottime = slottime;
        user.status = "accepted";
        user.save();
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/deleteappoint",async(req,res)=>{
    try{
        const email = req.body.email;
        const slotdate = req.body.slotdate;
        await Appoint.deleteOne({"useremail":email,"slotdate":slotdate});
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/cancelappoint",async(req,res)=>{
    try{
        const email = req.body.email;
        const slotdate = req.body.slotdate;
        const user = await Appoint.findOne({"useremail":email,"slotdate":slotdate});
        user.status = "cancelled";
        user.slottime = "-";
        user.save();
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/pendingappoint",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const hospitalname = req.body.hospitalname;
        const city = req.body.city;
        const user = await Appoint.find({"docname":docname,"hospitalname":hospitalname,"city":city,"status":"pending"}).sort({slotdate:-1});
        return res.json({status:'ok',message : "Successful !",data:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/cancelledappoint",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const hospitalname = req.body.hospitalname;
        const city = req.body.city;
        const user = await Appoint.find({"docname":docname,"hospitalname":hospitalname,"city":city,"status":"cancelled"}).sort({date:-1});
        return res.json({status:'ok',message : "Successful !",data:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/approvedappoint",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const hospitalname = req.body.hospitalname;
        const city = req.body.city;
        const user = await Appoint.find({"docname":docname,"hospitalname":hospitalname,"city":city,"status":"accepted"}).sort({date:-1,slottime:-1});
        return res.json({status:'ok',message : "Successful !",data:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/medicine",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const useremail = req.body.useremail;
        const userphn = req.body.userphn;
        const hospitalname = req.body.hospitalname;
        const date =  req.body.date;
        const slottime =  req.body.slottime;
        const username = req.body.username;
        const city = req.body.city;
        const medicine = req.body.medicine;
        var total  = 0;
        const xi = medicine.map((x)=>{
            total = total + x["cost"];
        })
        var med = new Medicine({"docname" : docname , "useremail":useremail , "userphn":userphn,"hospitalname":hospitalname, "date":date,"slottime":slottime, "username":username , "city":city,"medicine":medicine,"totalcost":total});
        med.save(function (err, book) {
                    if (err) return console.error(err);
        });
        return res.json({status:'ok',message : "Successful !"});       
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/prevrecords",async(req,res)=>{
    try{
        const docname = req.body.docname;
        const useremail = req.body.useremail;
        const userphn = req.body.userphn;
        const hospitalname = req.body.hospitalname;
        const date =  req.body.date;
        const slottime =  req.body.slottime;
        const username = req.body.username;
        const city = req.body.city;
        var med = await Medicine.findOne({"docname" : docname , "useremail":useremail , "userphn":userphn,"hospitalname":hospitalname, "date":date,"slottime":slottime, "username":username , "city":city});
        var data = med["medicine"];
        var cost = med["totalcost"];
        return res.json({status:'ok',message : "Successful !",data:data,cost:cost});       
    }
    catch(err){
        res.status(400).json({status : "err",message : "Data not send !",token : false})
    }
})

app.post("/patlist",async(req,res)=>{
    try{
        const user = await Patient.find();
        const data = [];
        user.map((x)=>{
            y = [];
            y.push(x["name"]);
            y.push(x["city"]);
            y.push(x["gender"]);
            y.push(x["email"]);
            y.push(x["phn"]);
            data.push(y)
        })
        return res.json({status:'ok',message : "Successful !",pat:data});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload !",token : false})
    }
})

app.post("/patdetails",async(req,res)=>{
    try{
        const patname = req.body.name;
        const patemail = req.body.email;
        const patphn = req.body.phn;
        const gender = req.body.gender;
        const user = await Patient.find({"name":patname,"email":patemail,"phn":patphn,"gender":gender});
        return res.json({status:'ok',message : "Successful !",pat:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload!",token : false})
    }
})

app.post("/patcheck",async(req,res)=>{
    try{
        const patname = req.body.name;
        const user = await Patient.find({"name":patname});
        return res.json({status:'ok',message : "Successful !",pat:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload!",token : false})
    }
})

app.post("/patremove",async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const phn = req.body.phn;
        const gender = req.body.gender;
        Patient.findOneAndDelete({"name":name,"email":email,"phn":phn,"gender":gender}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        });
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Patient not Removed!",token : false})
    }
})


app.post('/adddis',async(req,res)=>{
    try{
        const data = req.body.files;
        data.map(async(d)=>{
        const dis = await Disease.findOne({"Disease" : d.Disease});
        const data = ["nothing"]
        if(!dis)
        {
            var x = new Disease({"Disease" : d.Disease , "Description":d.Description,"Precaution":data});
            x.save();
            // console.log(x);
        }
        else
        {
            dis.Description = d.Description;
            dis.save();
            // console.log(dis);
        }
        })
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err)
    {
        res.json({status : "err",message : "Data Not Saved!",token : false})
    }
})

app.post('/adddisprec',async(req,res)=>{
    try{
        const data = req.body.files;
        // const key = Object.keys(data[0]);
        // console.log(key);

        data.map(async(d)=>{
        const dis = await Disease.findOne({"Disease" : d.Disease});
        var datas  = [d.Precaution_1,d.Precaution_2,d.Precaution_3,d.Precaution_4];
        if(!dis)
        {
            var x = new Disease({"Disease" : d.Disease , "Description":"nothing","Precaution":datas});
            x.save();
        }
        else
        {
            dis.Precaution = datas;
            dis.save();
        }
        })
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err)
    {
        res.json({status : "err",message : "Data Not Saved!",token : false})
    }
})


app.post("/diseaseslist",async(req,res)=>{
    try{
        const user = await Disease.find();
        return res.json({status:'ok',message : "Successful !",dis:user});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload !",token : false})
    }
})

app.post("/editdiseases",async(req,res)=>{
    try{
        const dis = req.body.disease;
        const des = req.body.description;
        const pre  = req.body.Precaution;
        const x =  await Disease.findOne({"Disease":dis})
        // console.log(x.Description);
        x.Description = des;
        x.Precaution = [pre];
        x.save();
        // console.log(x)
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Please Reload !",token : false})
    }
})

app.post("/deletediseases",async(req,res)=>{
    try{
        const dis = req.body.disease;
        Disease.findOneAndDelete({"Disease":dis}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        });
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Disease Not Deleted!",token : false})
    }
})

app.post("/deletealldiseases",async(req,res)=>{
    try{
        Disease.deleteMany({}, function(err) {})
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Disease Not Deleted!",token : false})
    }
})

app.post("/adddisease",async(req,res)=>{
    try{
        const dis = req.body.disease;
        const des = req.body.description;
        const pre = req.body.precaution;
        const x = new Disease({"Disease":dis,"Description":des,"Precaution":[pre]});
        x.save();
        // console.log(x);
        return res.json({status:'ok',message : "Successful !"});
    }
    catch(err){
        res.status(400).json({status : "err",message : "Disease Not Deleted!",token : false})
    }
})