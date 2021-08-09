const express = require('express');
const morgan = require('morgan');
const dburi ="mongodb+srv://Arvind:password05@cluster0.rayzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
const app = express();
const mongoose = require('mongoose');

mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>
{
    app.listen(3000,function(req,res)
    {
    console.log("server listening @ port 3000");
    })
}).catch((err)=>
{
    console.log(err);
});

app.set('view engine','ejs');

// app.listen(3000,function(req,res)
// {
//     console.log("server listening @ port 3000");
// })

app.use(morgan('dev'));

app.get('/',function(req,res,next)
{
    res.sendFile('./views/index.html',{root:__dirname});
    //res.send("<p>hii hello how are you</p>");
    next();
});

app.use(function(req,res,next)
{
    console.log("in the next");
    next();
})
app.get('/about',function(req,res)
{
    res.sendFile('./views/about.html',{root:__dirname});
});
app.get('/about-me',function(req,res)
{
    res.redirect('/about');
})
app.use(function(req,res)
{
    res.sendFile('./views/404.html',{root:__dirname});
})