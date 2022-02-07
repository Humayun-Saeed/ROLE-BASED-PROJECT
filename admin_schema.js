var mongoose=require('mongoose')

const admin=new mongoose.Schema({

    name:{type:String},
    password:{type:Number},
    age:{type:Number},
    scale:{type:Number}

})
module.exports=mongoose.model('admin',admin)