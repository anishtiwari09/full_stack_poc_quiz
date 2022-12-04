const Quizdata = require("../Models/quizquestion.model")

const getQuizQuestion=async(req,res)=>{
try{
const data=await Quizdata.find()
return res.status(200).json({msg:"success",data})
}
catch(e){
    res.status(500).json({msg:'internal server error'})
}
}
module.exports={getQuizQuestion}