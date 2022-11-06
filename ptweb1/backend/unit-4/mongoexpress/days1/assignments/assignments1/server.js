const express=require('express')
const app=express()
const PORT=3000
const connect=require('./config/db')
const userRouter=require('./Routers/user.route')
app.use(express.json())
app.use('/users',userRouter)
// app.get('/',async (req,res)=>{
//     console.log('working')
//     res.status(200).json({'msg':'successfull'})
// })
const start=async()=>{
await connect()
    
    app.listen(PORT,()=>{
        console.log('listneing',PORT)
    })
    
}
module.exports=start