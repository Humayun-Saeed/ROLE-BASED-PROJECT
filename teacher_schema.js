var mongoose=require('mongoose')

const teacher=new mongoose.Schema({

    name:{type:String},
   password:{type:String},
    age:{type:Number},
    role:{type:String}
})

module.exports=mongoose.model('teacher',teacher)