const express=require('express')
const apt=express()
const myLogger=(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toLocaleString()}`)
    next()
}
apt.use(myLogger)
apt.get("/",(req,res)=>{
    return res.send(`<h1>hello</h1>`)
})
apt.listen(5000,()=>{
    console.log('calling...')
})
apt.get('/users',(req,res)=>{
    res.send("User")
})
apt.get('/users/:userId',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(`User ${req.params.userId}`)
})
