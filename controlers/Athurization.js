
var express=require('express')
var mongoose=require('mongoose')
var jsw=require('jsonwebtoken')
var user=require('../user_schema')
var seceret_key="ad"
module.exports.create_token=async(data)=>{

    return await jsw.sign({data},seceret_key,{expiresIn:'50000000000s'})
}
module.exports.verify_token=async(req,res,next)=>{

    const bearear_token=req.headers['authorization']
    if(bearear_token){
    const token = bearear_token.split(" ")[1]
    req.token=token
    await jsw.verify(req.token,seceret_key,(err)=>{
    if(!err){
       let d=jsw.decode(req.token)
       //console.log("j");
       req.user=d.data
     console.log(req.user);
       next()
    }
    else{
        res.send(err);
    }
})
}
else{
    res.send("sign in again")
}
}
module.exports.role=(roles=>{
return (req,res,next)=>{

    if(roles.includes(req.user.role)){
      return  next();
    }
    else{
        res.send("not athorized: ")
    }
}

})