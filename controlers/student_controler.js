var express=require('express')
var stduent=require('../student_schema')
var auth=require('../controlers/Athurization')

module.exports.signup=(req,res)=>{
    const add=new stduent()
    add.name=req.body.name
    add.password=req.body.password
    add.roll=req.body.roll
    add.age=req.body.age
    add.role=req.body.role

    add.save().then((value) => {
            res.send("your account is generated: ")
    }).catch((err) => {
        console.log(err);
    })
}
module.exports.signin=async(req,res)=>{

    const data=await stduent.findOne({password:req.body.password})
    if(!data){
        console.log("there is no account: ");
    }
    else{
      //  console.log(data);
        res.send(await auth.create_token(data))
    }

}
module.exports.stduent_seeder=(req,res)=>{

    res.send("well come to the student view ")
}
