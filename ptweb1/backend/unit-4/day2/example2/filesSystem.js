//file system.
const path=require("path")
const fs=require('fs')
/* aync in nature*/
console.log('one')
fs.readFile(path.join(__dirname,'hello.txt'),'utf8',(err,data)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(data)//or use data?.toString(if you not provide utf 8)

})
let data=fs.readFileSync(path.join(__dirname,"hello.txt"),'utf8')//sync in nature
console.log(data)
console.log('two')

fs.writeFile('hello1.txt','hello world again..........',(err,data)=>{
    if(err)
    {
        console.log(err)
        return
    }
    else
    console.log('File Created')
})
//rename file

fs.rename(path.join(__dirname,'hello3.txt'),'hello3.txt',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('file renaming')
})
//created directory

fs.mkdir(path.join(__dirname,'text1'),err=>{
    if(err)
   {
       console.log('error: ',err)
       return
   }
    console.log('folder created')
})
