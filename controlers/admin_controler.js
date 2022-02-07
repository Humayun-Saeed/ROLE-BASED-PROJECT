

var express=require('express')
//const { TokenExpiredError } = require('jsonwebtoken')
var mongoose=require('mongoose')
var admin=require('../admin_schema')
var auth=require('./Athurization')

module.exports.signup=(req,res)=>{
const add=new admin()
add.name=req.body.name
add.password=req.body.password
add.age=req.body.age
add.scale=req.body.scale
add.save().then((value) => {
res.send("account is generated: ")
}).catch((err) => {
    console.log(err);
})
}
module.exports.signin=async(req,res)=>{
const data=await admin.findOne({password:req.body.password})
if(!data){
    res.send("there is no admin")
}
else{

    res.send(await auth.create_token(data))
}

}
module.exports.admin_seeder=(req,res)=>{
    res.send("well come to the admin page: ")
}