const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User =require('../models/userModel')


// @desc gets goals
// @route GET/api/goals
// @access Private
const getGoals = asyncHandler( async (req,res) =>{    
    const goals = await Goal.find({user:req.user.id});   
    res.status(200).json(goals)
})


// @desc delete goal
// @route DELETE/api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req,res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(401)
        throw new Error(`Goal with ${req.params.id} doesn't exist`)
    }
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("can't delete un owned goal")
    }
    const deletedGoal = await Goal.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedGoal)
})


// @desc add goal
// @route POST/api/goals
// @access Private
const addGoal = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id,
    })
    res.status(200).json(goal)
    
})


// @desc updates goal
// @route PUT/api/goal/:id
// @access Private
const updateGoal = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter a text field')
    }
    
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(401)
        throw new Error(`Goal with ${req.params.id} doesn't exist`)
    }
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("can't unpdate un owned goal")
    }

    const updatedgoal= await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedgoal)
})

module.exports={
    getGoals,
    deleteGoal,
    updateGoal,
    addGoal,
}