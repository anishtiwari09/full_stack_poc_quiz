const express=require('express')
const { getQuizQuestion } = require('./Controllers/QuizQuestion.controller')
const router=express.Router()
router.get('/quizquestion',getQuizQuestion)

module.exports=router