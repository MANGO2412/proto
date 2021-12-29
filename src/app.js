const express = require('express');
// const morgan = require('morgan');
const app = express();
const path = require('path');

//settings
app.set('port',3000)

//routes
app.use(require('./routes/routers'));

//middleware
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended:false}));
//404 handler 
app.use((req,res,next)=>{
   res.send("i'm sorry conde no found")
})

module.exports = app;