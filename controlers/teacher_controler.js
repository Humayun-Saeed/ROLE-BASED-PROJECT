var express=require('express')
var mongoose=require('mongoose')
var teacher=require('../teacher_schema')
var jsw = require('jsonwebtoken')



module.exports.signup=(req,res)=>{

const add=new teacher()
add.name=req.body.name
add.password=req.body.password
add.age=req.body.age
 add.save().then((data)=>{
     res.send("your account is generated")
 }).catch((err) => {
     console.log(err);
 })

}

module.exports.teacher_seeder=(req,res)=>{
    res.send("well come to the teacher portal: ")
}



