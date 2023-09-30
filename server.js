const express = require('express') ;
const dotenv = require('dotenv') ;
const morgan = require('morgan') ;
dotenv.config({path:'./config.env'}) ;
const DbConnection = require('./src/config/database')
const userRoute = require('./src/routes/authRoute') ;

//DB Connection 
DbConnection() ;


const app = express() ;



//Use Middelware
app.use(express.json()) ;
app.use(morgan('dev')) ;

//Mount Routes
app.use('/api/v1/users',userRoute) ;




const port = process.env.port||3000 ;

app.listen(port,() => {
    console.log(`This Server Is Running on port : ${3000}`) ;
})