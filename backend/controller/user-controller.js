// const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc gets user
// @route GET/api/user/me
// @access Private
const getMe =  (req,res) =>{
    // const user = await userfind();
    res.status(200).json({message:'get user data'})
}



// @desc add user//
//  @route POST/api/user
// @access Public
const registorUser= (req,res)=>{
    
    res.status(200).json({message:'registor user'})
    
}


// @desc login user
// @route POST/api/user:id
// @access Public
const loginUser= (req,res)=>{
    res.status(200).json({message:'login user'})
}

module.exports={
    getMe,
    loginUser,
    registorUser,
}