const http=require('http')
const https=require('https')
const path=require('path')
const fs=require('fs')
const server=http.createServer( (req,res)=>{
    if(req.url.startsWith("/")&&req.method==="GET")
    {
        const [url,query]=req.url.split(':')
       
        res.writeHead(200)
handleHomePage(Number(query)||1,req,res)

    }
})
const getUserDetails=async(id,httpResp)=>{
    try{
        let y=[]
https.get(`https://reqres.in/api/users/${id}`,(res)=>{
    let data=''
    res.on('data',chunk=>{

data+=chunk

    })
   
  res.on('end',()=>{
  
      data=JSON.parse(data)
if(Object.keys(data).length<1)
{
    httpResp.writeHead(404)
  fs.readFile(path.join(__dirname,'templates','notFound.html'),'utf8',(err,data)=>{
      httpResp.end(data)
  })
}

     let option={
         name:data?.data?.first_name+" "+data?.data?.last_name,
         email:data?.data?.email,
         img_src:data?.data?.avatar,
         title:'User Details'
     }
     fs.readFile(path.join(__dirname,'templates','index.html'),'utf8',(err,data)=>{
let templates=data
        for(let key in option)
{
  
    templates=templates.replace(`{${key}}`,option[key])
}
httpResp.end(templates)
     })
  })
   
})
    }
    catch(e){

    }
}
const handleHomePage=async (userId,req,res)=>{
    try{
       
let result=await getUserDetails(userId,res)


return 1
    }
    catch(e){

    }
}
server.listen(8080,()=>{
    console.log('listning')
})