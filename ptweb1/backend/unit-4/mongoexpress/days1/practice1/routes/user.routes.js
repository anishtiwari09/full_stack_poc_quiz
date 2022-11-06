const express=require('express')
const User=require('../models/users.model')
const {body,validationResult}=require('express-validator')
const validatorUser=require('../utils/userValidator')
const router=express.Router()

//cors
router.get("/",async (req,res)=>{
    try{
    const user=await User.find().skip(2).limit(2)
    console.log(user)
    return res.status(200).json(user)
}
catch(e){
    return res.status(400).json({msg:'something went wrong'})
}
}
)

router.get("/code/:code",async(req,res)=>{
  

try{
   
    const user=await User.findOne({code:req.params.code})
    
if(!user)
return res.status(200).json({message:'user not found'})
else
res.status(200).json(user)}
catch(e){
    return res.status(400).json({msg:'something went wrong'})
}
})

router.post("/",...validatorUser(),async(req,res)=>{
    try{
        const errors=validationResult(req)
       
        if(!errors.isEmpty())
        return res.status(404).json(errors)
const doesUserExist=await User.findOne({code:req.body.code})
if(doesUserExist)
return res.status(400).json({msg:"Duplicate code found"})

const user=await User.create({
    name:req.body.name,
    code:req.body.code,
    active:req.body.active,
    followers:0

})
console.log(user,'about user')
if(!user) 
return res.status(400).json({msg:"user not created"})
else
return res.status(200).json(user)
    }
    catch(e){
   
return res.status(400).json({msg:'something went wrong'})
    }
})


router.delete("/:user_id",async(req,res)=>{
try{
    let user=await User.findOneAndDelete({_id:req.params.user_id})
    if(!user)
    return res.status(404).json({msg:"user not found"})
    return res.status(200).json(user)
}
catch(e){
    return res.status(400).json({msg:"something went wrong"})
}

})

router.patch("/:user_id",async(req,res)=>{
   try{
    let user=await User.findByIdAndUpdate({
        _id:req.params.user_id
    },
    {
        $set:{
            name:req.body.name,
            active:req.body.active
        }
    },{
        returnOriginal:false
    }
    )
    if(!user)
    return res.status(404).json({msg:"user not found."})
    return res.status(200).json(user)
   }
   catch(e){
    return res.status(400).json({msg:"something went wrong"})
   }
})
module.exports=router