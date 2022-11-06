const express=require('express')
const connect=require('./config/db')
const cors=require('cors')
const app=express()
const PORT=5000
const User=require('./models/users.model')
const userRouter=require('././routes/user.routes')
//cors
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
const start=async()=>{
    await connect()
    app.listen(PORT,(req,res)=>{
        console.log('app is working on '+PORT)
    })
}
module.exports=start