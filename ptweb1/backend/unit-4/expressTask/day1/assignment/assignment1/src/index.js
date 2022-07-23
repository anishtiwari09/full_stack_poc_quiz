const express=require('express')
const uuid=require('uuid')
const userDb = require('./userDb')
const apt=express()
apt.get('/',(req,res)=>{
    res.status(200).send(`<h1>Welcome to Home page</h1>`)
})
apt.listen(5000,()=>{
    console.log("lisning...")
})
apt.get('/users',(req,res)=>{
    res.status(200).json(userDb)
})
apt.get('/users/:userId',(req,res)=>{
    let ids=req.params.userId
    let datas=userDb.find(item=>item.id==ids)
    try{
        if(datas)
        res.status(200).json(datas)
        else throw 'User not found..'
    }
    catch(e){
        res.status(400).send(e)
    }
})