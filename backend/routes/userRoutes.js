const express = require('express')
const router = express.Router()

const {
    getMe,
    registorUser,
    loginUser,
           }=require('../controller/user-controller')

router.route('/').post(registorUser)
router.route('/login').post(loginUser)
router.route('/me').get(getMe)

module.exports=router