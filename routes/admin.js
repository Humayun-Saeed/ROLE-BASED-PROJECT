var express=require('express')
var mongoose=require('mongoose')
var admin=require('../controlers/admin_controler')
var auth=require('../controlers/Athurization')
var router=express.Router()

router.post('/signup/admin',admin.signup)
router.post('/signin/admin',admin.signin)
router.get('/verify',auth.verify_token,auth.role(["admin"]),admin.admin_seeder)

module.exports=router
