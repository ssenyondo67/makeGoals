const express = require('express')
const cors =require('cors')
const {errorHandler} =require('./middleware/errorMiddleware.js')
const dotenv =require('dotenv')
const colors = require('color')
const {connectDB} =require('./config/db.js')

dotenv.config()


connectDB()

const port =process.env.PORT || 5000

const app =express()

app.use(cors({
    orgin:"*",
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
  
app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})