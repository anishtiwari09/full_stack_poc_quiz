const express=require('express')
const apt=express()

apt.get("/",(req,res)=>{
    return res.send(`<h1>hello</h1>`)
})
apt.listen(5000,()=>{
    console.log('calling...')
})