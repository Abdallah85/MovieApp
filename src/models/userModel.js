const mongoose = require('mongoose') ;


const userSchema = new mongoose.Schema({
    username:{
        type:String ,
        required:[true , 'Username Required'],
        trim:true
    },
    email:{
        type:String ,
        required:[true , 'User Email Required'],
        unique:true
    },
    password:{
        type:String ,
        required:[true,'User Password Required']
    },
    isAdmin:{
        type:Boolean ,
        default:false
    },
},{timestamps:true}) ;



const userModel = mongoose.model('user',userSchema) ;


module.exports = userModel ;