const fs = require('fs');
const path = require('path');
// fs - file system

// create folder
/*fs.mkdir(path.join(__dirname,'test'), {}, function(err){
    if(err) throw err;
    console.log("folder created successfully!");
});*/

/*fs.mkdir(path.join(__dirname,'/test'), {}, (err) => {
    if(err) throw err;
    console.log("folder created successfully!");
});

fs.mkdir(path.join(__dirname,'/test'), {}, err => {
    if(err) throw err;
    console.log("folder created successfully!");
});*/


// Write into a file
fs.writeFile(path.join(__dirname,'test','sample.txt'),'This is the sample text.', err => {
    if(err) throw err;
    console.log("File created and written");
});

// Append into a file
fs.appendFile(path.join(__dirname,'test','sample.txt'), 'appended text.\n Hello.', err => {
    if(err) throw err;
    console.log("file appended");
});

// Read file
fs.readFile(path.join(__dirname,'test','sample.txt'),'utf8', (err,data)=>{
    if(err) throw err;
    console.log("reading file - ")
    console.log(data);
});