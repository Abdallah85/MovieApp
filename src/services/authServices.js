const asyncHandelr = require('express-async-handler') ;
const userModel = require('../models/userModel') ;
const JWT = require('jsonwebtoken') ;
const bcrypt = require('bcryptjs') ;



// @desc    Signup
// @route   POST /api/v1/auth/signup
// @access  Public
exports.signUp = asyncHandelr(async (req ,res , next)=>{
// (1) Create User
const user = await userModel.create({
    username:req.body.username ,
    email:req.body.email ,
    password:await bcrypt.hash(req.body.password,12)
});

// (2) Create Token Using JWT
const token = JWT.sign({userID:user._id , isAdmin:user.isAdmin} 
    ,process.env.SECRET_KEY ,{expiresIn:process.env.JWT_OPTIONS}) ;

// (3) response User Data With Token
res.status(201).json({
    status:'Success',
    data:user,
    token
}) ;
});


// @desc    Signin
// @route   GET /api/v1/auth/signin
// @access  Public
exports.signIn = asyncHandelr(async(req , res , next) => {
// (1) Get User Email and Password and Check Them
    const user = await userModel.findOne({
        email:req.body.email
    });
// if Password or Email Incorrect
    if(!user||!await bcrypt.compare(req.body.password,user.password)){
        throw new Error(`Email Or Password Incorrect`) ;
    }
// (2) Create Token Using JWT
    const token = JWT.sign({userID:user._id , isAdmin:user.isAdmin} 
        ,process.env.SECRET_KEY ,{expiresIn:process.env.JWT_OPTIONS}) ;

// (3) response User Data With Token
    res.status(200).json({
        status:'Success',
        data:user,
        token
    }) ;

})