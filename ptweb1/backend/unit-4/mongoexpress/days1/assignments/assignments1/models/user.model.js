const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    userId:{type:String,require:true},
    email_id:{type:String,require:true}
})
const User=mongoose.model("user",userSchema,"mongoExpressAssignment")
module.exports=User