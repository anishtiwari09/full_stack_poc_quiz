const fs=require('fs')
const path=require('path')
const readFile=async ()=>{
    let currentPath=path.join(__dirname,'../textFolder','hello.txt')
let promise=await new Promise((res,rej)=>{
    fs.readFile(currentPath,'utf8',(err,data)=>{
        if(err)
        res(data)
    })
})
return promise
}

const writeFile=async ()=>{
    let currentPath=path.join(__dirname,'../textFolder','hell2.txt')
let promise=await new Promise((res,rej)=>{
 fs.writeFile(currentPath,'this text written by me',(err,data)=>{
        if(err)
        {
          
            res( `error: ${err}`)
        }
        res('file is saved',data)
    })
})
return promise
}
const readFileSync=()=>{
    let currentPath=path.join(__dirname,'../textFolder','hello.txt')
    let y=fs.readFileSync(currentPath,'utf8',(err,data)=>{
        if(err)
        return `err:${err}`
    })
    return (y)
}

const writeFileSync=()=>{
    let currentPath=path.join(__dirname,'../textFolder','hell5o.txt')
   let y= fs.writeFile(currentPath,'this textfkfkk by me',(err,data)=>{
        if(err)
        {
          console.log(err)
          return 'error ' + err
        }
        console.log('file is saved')
    })
    console.log('y')
    return y
}

const mainFunction=async ()=>{
    // let result= await readFile()
   try{
    let result=writeFileSync()
    console.log(result)
   }
   catch(e)
   {
       console.log(e)
   }
    
}
mainFunction()


