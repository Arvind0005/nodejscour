const fs = require('fs');

///reading a file
// fs.readFile('./docs/file.txt',function(err,data) 
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// });

// console.log("just typing");

//writing a file
// fs.writeFile('./docs/file.txt','hello Arvind',function(err,data)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(`data written`);
//     }
// }
//)

//directories
// if(!fs.existsSync('./assets'))
// {
//     fs.mkdir('./assets',function (err)
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log("dir created");
//         }
//     })
// }
// else{
//     fs.rmdir('./assets',function (err)
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log("removed the dir");
//         }
//     })
// }

//deletefile

if(fs.existsSync('./docs/deletefile'))
{
    fs.unlink('./docs/deletefile',function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("file deleted");
        }
    });
}
else{
    fs.writeFile('./docs/deletefile',"hii hello hw r u",function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("file created");
        }
    })
}