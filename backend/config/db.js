const mongoose =require('mongoose')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL)        
    } catch (error) {
        console.log(error)
        process.exit(1)      
    }
}

module.exports ={
    connectDB,
}
