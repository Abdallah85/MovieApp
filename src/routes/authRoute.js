const express = require('express') ;

const router = express.Router() ;


const {signUp , signIn} = require('../services/authServices') ;

router.post('/signup',signUp) ;
router.get('/signin',signIn) ;


module.exports = router ;