const express=require('express')
const router=express.Router()
const User=require('../models/user.model')
router.get('/',async(req,res)=>{
   try{
      let {per_page,page}= req.query
      per_page=Number(per_page)||2
      page=Number(page)||1
      // console.log(per_page,page,typeof per_page)
      const user= await User.find().skip((page-1)*per_page).limit(per_page)
      const user2= await User.find().count()
      if(user.length)
       return res.status(200).json({msg:user,totalUser:user2})
       return res.status(200).json({msg:"no user found"})
    
   }
   catch(e){
      
   return  res.status(404).json({msg:"You messed up"+e})
   }
})
router.delete('/:user_id',async(req,res)=>{
   try{
      const user_id=req.params.user_id
      
      let  user=await User.findOneAndDelete({_id:user_id})
      
      const user2= await User.find().count()
      if(user)
      return res.status(200).json({msg:user,remainingUser:user2})
      return res.status(200).json({msg:"no user found"})
    
   }
   catch(e){
      // console.log(e)
   return  res.status(404).json({msg:"You messed up"})
   }
})
router.patch('/:user_id',async(req,res)=>{
   try{
      
      const user_id=req.params.user_id
      
      let  user=await User.findOneAndUpdate({_id:user_id},{$set:{
         name:req.body.name,
         email:req.body.email
      }},{returnOriginal:false})
      console.log(user)
      const user2= await User.find().count()
      if(user)
      return res.status(200).json({msg:user,remainingUser:user2})
      return res.status(200).json({msg:"no user found"})
    
   }
   catch(e){
     console.log('e')
   return  res.status(404).json({msg:"You messed up"})
   }
})
router.post("/",async(req,res)=>{
   try{
    let {name,email,user_id}=req.body
   //  console.log(typeof name,typeof email,typeof user_id)
   if(!user_id)
   return res.status(404).json({msg:"user_id can not be empty"})
    let user=await User.findOne({userId:user_id})
    console.log(user)
    if(user)
    return res.status(201).json({msg:'look like we know you'})
    user=await User.insertMany({
        name,
        userId:user_id,
        email_id:email
    })
    return res.status(200).json({msg:"Account Created Successfully"})
   }
   catch(e){
    return res.status(400).json({msg:"something went wrong"})
   }
})
// router.purge("/",async(req,res)=>{
//    try{
//    console.log('calling')
//    //  console.log(typeof name,typeof email,typeof user_id)
//    let user=await User.deleteMany({userId:null})
//    console.log(user,"user")
//     return res.status(200).json({msg:user})
//    }
//    catch(e){
//     return res.status(400).json({msg:"something went wrong"})
//    }
// })
module.exports=router