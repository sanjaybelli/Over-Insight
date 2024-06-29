var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sanjay');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.post('/sign_up', function(req,res){
    var User = req.body.user;
    var Email = req.body.email;
    var Password = req.body.password;
    var ConfirmPassword =req.body.confirmPassword;
    var Address = req.body.address;
    var data = {
        "user": User,
        "email":Email,
        "password":Password,
        "confirmPassword":ConfirmPassword,
        "address":Address,
    }
db.collection('Orders').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");      
    });

})  
app.listen(8000);
console.log("server listening at port 8000");
