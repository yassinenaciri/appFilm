const express = require('express')
const router=express.Router();
const userModel = require("../models/userModel");

router.post('/authenticate',(req,res)=>{
    let user=req.body;
    userModel.findOne(user).then(result=>{
        if(result){
            res.status(200).json(result._id);
        }else{
            res.json(false)
        }
    })
})

router.post('',(req,res)=>{
    let user=req.body;
    let newUser =new userModel(user);
    if (!userDoesExist(user.email)){
        newUser.save().then(result=>{
            console.log(result);
            res.status(200).json(result._id)});
    }else{
        res.json(false)
    }
})

userDoesExist =(email)=>{
    userModel.findOne({email :email}).then(result=>{
        result ? true :false
    })
}
module.exports =router;