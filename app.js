const express = require('express');
const morgan = require('morgan');
const dburi ="mongodb+srv://Arvind:password05@cluster0.rayzm.mongodb.net/test0?retryWrites=true&w=majority"; 
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');


mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(result)
{
    app.listen(3000,function(req,res)
    {
    console.log("server listening @ port 3000");
    console.log("connected to db");
    })
}).catch((err)=>
{
    console.log(err);
});

app.get('/add-blog',function(req,res)
{
    const blog = Blog({
        title: 'title10',
        snippet:'snippet10',
        body:'body10',   
    });
    blog.save().then(function(result)
    {
        res.send(result);
    }).catch(function(err)
    {
        console.log(err);
    })
});

app.get('/all-blogs',function(req,res)
{
   Blog.find().then(function(data)
   {
       res.send(data);
        console.log(data);
   }).catch(function(err)
   {
       console.log(err);
   })
})

app.get('/findone',function(req,res)
{
    Blog.findOne({
        title:'title10',
    }).then(function(data)
    {
        console.log(data);
        res.send(data);
    })
})
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