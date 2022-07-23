const express=require('express')
const apt=express()
const user=require('./user')
const uuid=require('uuid')
console.log(user)
const myLogger=(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toLocaleString()}`)
    next()
}
 apt.use(myLogger)
apt.use(express.json())
apt.get("/",myLogger,(req,res)=>{
    return res.send(`<h1>Example-3</h1>`)
})
apt.listen(5000,()=>{
    console.log('calling...')
})
apt.get('/users',(req,res)=>{
    res.status(200).json(user)
})
apt.get('/users/:userId',(req,res)=>{
   
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

apt.post("/users",(req,res)=>{
    try{
const {Name,Active}=req.body
if(!Name)
throw "Name Can not be Invalid"
if(Active===undefined)
throw "Active Can not be Invalid"
const users={Name,Active,id:uuid.v4()}

res.status(200).json(users)
    }
    catch(e){
res.status(400).send(`Invalid Body: ${e}`)
    }
})
