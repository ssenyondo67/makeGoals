const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware')

const {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
              }=require('../controller/goal-controller')

router.route('/').get(protect,getGoals).post(protect, addGoal)
router.route('/:id',).put(protect,updateGoal).delete(protect,deleteGoal)
module.exports=router