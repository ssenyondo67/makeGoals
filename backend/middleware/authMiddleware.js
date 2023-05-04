const jwt =require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req,res,next)=>{
     let token;
    
    //  check if token exist
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    
        try {
            // get token from headers
            token = req.headers.authorization.split(' ')[1]
            
            // verify token
            const deconded =  jwt.verify(token, process.env.JWT_SECRET);
            
            // get token user and set user data to req - password
            req.user = await User.findById(deconded.id).select('-password')
           
            next()
            
        } catch (error) {
            
            res.status(401)
            throw new Error('Unauthorized ')
        }

    }

    if(!token){
        res.status(201)
        throw new Error('Not authorized no token')
    }
})

module.exports={
    protect,
}