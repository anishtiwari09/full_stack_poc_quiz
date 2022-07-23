// let sum=require('./sum')
// console.log(sum(19,29))

const http=require("http")
let server=http.createServer((req,res)=>{
    console.log('headers')
  console.log(req.headers)
    console.log(req.url)
    res.writeHead(200,{'content':'application/json'})
    res.end(JSON.stringify({
        data:"hello wrold"
    }))
   
})
server.listen(8080,()=>{
   console.log('lisnening')
})

