const http = require("http");
const fs = require('fs');

const server = http.createServer(function(req,res)
{
    console.log(req.url,req.method);
    let path = './views';

    switch(req.url)
    {
        case '/':
            path +='/index.html';
            res.statusCode =200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode =200;
            break;
        case '/about-me':
            // path+='/about.html';
            res.statusCode =301;
            res.setHeader('Location','/about')
            res.end();
            break;
        default:
            path+='/404.html';
            res.statusCode=404;
            break;
    }
    //res.write("");
    // res.write
    // res.write("<p>Hello World</p>");
    // res.write('<p>hii world</p>');
    // res.end();
    if(fs.existsSync(path))
    {
        res.setHeader('Content-Type','text/html');
        fs.readFile(path,function(err,data)
        {
            if(err)
            {
                console.log(err);
                res.end();
            }
            else
            {
                //res.write(data);
                res.end(data);
            }
        }
        )
    }
});

server.listen(3000,'localhost',function ()
{
    console.log("server listening @ port 3000");
});