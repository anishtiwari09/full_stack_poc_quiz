const createUsers=()=>{
    let arr=[]
    for(let i=0;i<10;i++)
    {
        let obj={
            Id:i,
            Username:String.fromCharCode(65+i)
        }
arr.push({...obj})
    }
    return [ ...arr]
}
const users=createUsers()
const getAllUsers=()=>{
    return users
}
const getUser=(id)=>{
 let user=users.filter((_,i)=>i===id)[0]
 return user??'User Not defined'
}
const addUser=(value)=>{
users?.push({Username:value,id:users.length})
return [...users]
}
const showUserPerPage=(page=1)=>{
const start=(page-1)*3
const end=start +3
return users.slice(start,end)
}
module.exports={
    getAllUsers,
    getUser,addUser,
    showUserPerPage
    
}