const http = require("http");

const server = http.createServer(function(req,res)
{
    console.log("request came");
    res.write("hello");
});

server.listen(3000,'localhost',function ()
{
    console.log("server listening @ port 3000");
});