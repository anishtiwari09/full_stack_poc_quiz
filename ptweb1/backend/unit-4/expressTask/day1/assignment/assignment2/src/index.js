const userrouter = require("./router")

const express=require('express')
const app=express()
app.use(express.json())
app.use('/',userrouter)

app.listen(5000,()=>{
    
    console.log('listnening...')
})