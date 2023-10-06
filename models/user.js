const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required: true
        },
        stream:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }
    },
    {timestamps:true}
);

exports.User=mongoose.model('User',userSchema);