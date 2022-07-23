const http=require('http')
const https=require('https')
const path=require('path')
const fs=require('fs')
const server=http.createServer(async (req,res)=>{
    if(req.url.startsWith('/')&&req.method==="GET")
    {
        if(req.url==="/")
        {   
            let result= await homePage()
         res.writeHead('200')
         res.end(result)
        }
        else if(req.url.startsWith("/user/")){
            const[url,query]=req.url.split(':')
            let id=Number(query)
            if(!isNaN(id))
            {
               let details=await userDetailsFn(id)
               res.writeHead('200')
               res.end(details)
            }
        }
    }
})

const htmlFiles=async (fileName,option)=>{
   let y= new Promise((res,rej)=>{
       let templates=fs.readFile(path.join(__dirname,'templates',fileName),'utf8',(err,data)=>{
 let templates=data
 for(let key in option )
 {
     value=option[key]
     templates=templates.replace(`{${key}}`,value)
 }
 res(templates)
})
       
    })
    return y
}

const renderedTemplates=async()=>{
    
    let option={
        'title':'home Page',
        'desc':"This is Basic Server Side rendering Page."
    }
    let templates=await htmlFiles('index.html',option)
    return templates
}

const homePage=async ()=>{
    let result=await renderedTemplates()
  
    return result
}

server.listen(8080,()=>{
    console.log('listning...')
})

const fetchUsers=async (id=1)=>{
    
    try{
      let temp=await new Promise((res1,rej)=>{
          let data='1'
        https.get(`https://reqres.in/api/users/${id}`,async(res)=>{
            res.on('data',async (d)=>{
           res1(JSON.parse(d))
            })
        })
      })
      return temp
    }
    catch(e){

    }
}
const userDetailsFn=async (id)=>{
    try{
let templates=await fetchUsers(id)
let option={
    name:templates?.data?.first_name,
    full_name:templates?.data?.first_name+' '+templates?.data?.last_name,
    email:templates?.data?.email,
    img_src:templates?.data?.avatar

}
templates=await htmlFiles('user.html',option)
return templates
    }
    catch(e)
    {

    }
}