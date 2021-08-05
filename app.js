const express = require('express');

const app = express();

app.listen(3000,function(req,res)
{
    console.log("server listening @ port 3000");
})

app.get('/',function(req,res)
{
    res.sendFile('./views/index.html',{root:__dirname});
    //res.send("<p>hii hello how are you</p>");
});
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