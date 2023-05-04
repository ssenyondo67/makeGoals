const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware.js')
const {
    getMe,
    registorUser,
    loginUser,
           }=require('../controller/user-controller')

router.route('/').post(registorUser)
router.route('/login').post(loginUser)
router.get('/me', protect, getMe)

module.exports=router