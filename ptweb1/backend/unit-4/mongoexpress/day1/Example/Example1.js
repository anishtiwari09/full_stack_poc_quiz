const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port="2233"


const connect=()=>{
    return (
        mongoose.connect("mongodb://localhost:27017/db_name1",{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })
    )
}
const userschema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    ip_address:String,
    gender:String,
    age:Number
})
const User=mongoose.model("collection_name1",userschema)
app.get('/user',async(req,res)=>{
    const user=await User.find().lean().exec()
    res.status(200).json({data:user})
})
const start =async ()=>{
    await connect()
    app.listen(port,()=>{
        console.log(`run on port ${port}`)
    })
}
start()