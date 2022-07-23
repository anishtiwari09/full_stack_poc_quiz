const user=require('./user')
const express=require('express')
const uuid=require('uuid')
const router=express.Router()
router.get('/users',(req,res)=>{
    res.status(200).json(user)
})
router.get('/users/:userId',(req,res)=>{
   
    const users=user.find(item=>{
        return item.id==req.params.userId
       
    })
   
    console.log(users)
    
    try{
        if(typeof users==="object")
        res.status(200).json(users)
        else
        throw "user not found"

    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post("/users",(req,res)=>{
    try{
const {Name,Active}=req.body
if(!Name)
throw "Name Can not be Empty"
if(Active===undefined)
throw "Active Can not be Empty"
const users={Name,Active,id:uuid.v4()}
user.push(users)
res.status(200).json(users)
    }
    catch(e){   
res.status(400).send(`Invalid Body: ${e}`)
    }
})

module.exports=router