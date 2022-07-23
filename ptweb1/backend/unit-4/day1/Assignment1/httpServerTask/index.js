let parse=require('html-react-parser')
const http=require('http')
let server=http.createServer((req,res)=>{
  try{  res.writeHead(200,{"content-type":'application/json'})
    res.end(JSON.stringify({data:'hello world'}))}
    catch(e)
    {
res.writeHead(500,{'content-type':'internal sever error'})
res.end(JSON.stringify({'err':e}))
    }
})
server.listen(8080,()=>{
    console.log('listnenig')
})