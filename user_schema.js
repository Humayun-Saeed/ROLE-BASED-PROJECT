
var express=require('express')
var mongoose=require('mongoose')

const user=new mongoose.Schema({

    role:{type:String,enum:["admin","student","teacher"]}
})