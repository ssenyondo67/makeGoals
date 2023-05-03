
const mongoose =require('mongoose')

const userSchema =mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please provide a name value'],
        },
        email:{
            type:String,
            required:[true,'Please provide a email value'],
            unique:true,
        },
        password:{
            type:String,
            required:[true,'Please provide a password value'],
        },

    },{
        timestamps:true,
    })

module.exports= mongoose.model('User',userSchema)