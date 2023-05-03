
const mongoose =require('mongoose')

const goalSchema =mongoose.Schema(
    {   
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:[true,'Please provide a text value'],
            ref:'User',
        },
        text:{
            type:String,
            required:[true,'Please provide a text value'],
        },
    },{
        timestamps:true,
    })

module.exports= mongoose.model('Goal',goalSchema)