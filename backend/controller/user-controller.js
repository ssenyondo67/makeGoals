const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const { generateToken} =require('../utilities/utilities')


// @desc gets user
// @route GET/api/user/me
// @access Private
const getMe =  asyncHandler( async(req,res) =>{
    // const user = await userfind();
    res.status(200).json({
       _id:req.user.id,
       name:req.user.name,
       email:req.user.email
    })
})



// @desc add user//
//  @route POST/api/user
// @access Public
const registorUser= asyncHandler( async (req,res)=>{
    const { name, email, password}= req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please enter all field')
    }

    const userExist = await User.findOne({email})
    
    if(userExist){
        res.status(400)
        throw new Error('User email already exist')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword  = await bcrypt.hash(password,salt);

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201)
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})


// @desc login user
// @route POST/api/user:id
// @access Public
const loginUser= asyncHandler( async (req,res)=>{
    const { email, password}= req.body

    if(!email || !password){
        res.status(400)
        throw new Error('Please enter all field')
    }

    const user = await User.findOne({email})
    
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(201)
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credetials')
    }

})

module.exports={
    getMe,
    loginUser,
    registorUser,
}