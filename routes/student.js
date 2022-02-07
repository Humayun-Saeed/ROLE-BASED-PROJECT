var express=require('express')
var mongoose=require('mongoose')
var student=require('../controlers/student_controler')
var  auth=require('../controlers/Athurization')
var router=express.Router()

router.post('/signup/student',student.signup)
router.post('/signin/student',student.signin)

router.post('/verify/student',auth.verify_token,auth.role(["student"]),student.stduent_seeder)


module.exports=router
