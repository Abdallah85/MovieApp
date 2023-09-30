const mongoose = require('mongoose') ;

function connDatabase(){
    let URL  ;
    if(process.env.NODE_ENV=='development'){
        URL= process.env.DB_LOCAL
    }
    mongoose.connect(URL).then((conn) => {
        console.log(`Database Connected On Local Host : ${conn.connection.host}`);
    }).catch((err) => {
        console.log(`Database Connection Error ${err}`);
    })
} ;


module.exports = connDatabase ;

