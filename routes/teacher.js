var express=require('express')
var mongoose=require('mongoose')
var teacher=require('../controlers/teacher_controler')
var auth=require('../controlers/Athurization')
var router=express.Router()

router.post('/signup/teacher',teacher.signup)
router.post('/verify/teacher',auth.verify_token,auth.role(["teacher"]),teacher.teacher_seeder)


module.exports=router
