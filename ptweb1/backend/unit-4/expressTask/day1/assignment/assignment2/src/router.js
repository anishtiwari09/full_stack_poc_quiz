const express=require('express')
const uuid=require('uuid')
const router=express.Router()
let bookDb=require('./storeDb')
const send404Error=async(msg,res)=>{
res.status(400).json(msg)
}
router.get('/',(req,res)=>{
    res.status(200).json(bookDb)
})
router.post('/book',(req,res)=>{
    try{
        let    {author,book_name,pages,Year}=req.body

let obj={author,book_name,pages,Year}
for(let keys in obj){
    if(obj[keys]==undefined)
    {
        throw `${keys} can not be null`

    }
}
res.status(200).json({...obj,id:uuid.v1()})
    }
catch(e){
res.status(404).send(e)
}
})
router.get('/book/:id',(req,res)=>{
    try{
const {id}=req.params
let items=bookDb.find((item)=>item.id==id)
console.log('items')
if(!items)
{
    throw 'Items not founded...'
}
res.status(200).json(items)
}

    catch(e){
        console.log(e)
send404Error(e,res)
    }
})
router.patch('/book/:id',(req,res)=>{
    try{
        const {id}=req.params
        const {author,Year}=req.body
        let obj={author,Year}
        for(let key in obj){
            if(obj[key]==undefined)
            throw `${key} can not be empty.`
        }
        for(let i=0;i<bookDb.length;i++){
            bookDb[i]={...bookDb[i],author,Year}
        }
      
        let items=bookDb.find(item=>item.id==id)
        if(!items){
        throw 'Items not founded.'}
        res.status(200).json(items)

    }
    catch(e){
        console.log(e)
        send404Error(e,res)
    }
})
router.delete('/book/:id',(req,res)=>{
    const {id}=req.params
    console.log(id)
    bookDb=bookDb.filter(item=>item.id!=id)
    res.status(200).json(bookDb)
    
})
module.exports=router