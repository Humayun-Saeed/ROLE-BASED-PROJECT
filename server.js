var mongoose=require('mongoose')
var express=require('express')
var teacher=require('./routes/teacher')
var student=require('./routes/student')
var admin=require('./routes/admin')
var app=express()
app.use(express.json())

mongoose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to the database successfully: ");
}).catch((err)=>{
    console.log(err);
})
app.use('/',admin)
app.use('/',student)
app.use('/',teacher)
app.listen(3000,()=>{
    console.log("connected to the server");
})
