const fs = require ('fs');

if(fs.existsSync('./docs/blog0.txt'))
{
    const readstreams =fs.createReadStream('./docs/blog0.txt',{encoding:'utf8'});

    const writestreams = fs.createWriteStream('./docs/block1.txt');

// readstreams.on('data',function (chunck)
// {
//     console.log("-------------NEW DATA----------------");
//     console.log(chunck);
//     writestreams.write("\n NEW CHUNCK \n");
//     writestreams.write(chunck);
// })
readstreams.pipe(writestreams);
}
else{
    console.log("no such file");
}