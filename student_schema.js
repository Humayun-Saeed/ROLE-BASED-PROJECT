var mongoose=require('mongoose')

const stduent=new mongoose.Schema({

name:{type:String},
roll:{type:Number},
age:{type:Number},
password:{type:String},
role:{type:String,enum:["student"]}

})
module.exports=mongoose.model('student',stduent)