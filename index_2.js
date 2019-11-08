/*console.log("Hello from node.js");
const per = require('./Person');

person1 =  new per('Deepti Garg', 30);
console.log("Age = ",person1.age);
person1.greeting();
*/

const http = require('http');
const path = require('path');
const fs = require('fs');



const server = http.createServer((req,res) => {
    //console.log(req.url); // tells which url is being called 
    
    // For index page
    if(req.url==='/'){
        // To write in the response headers
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.readFile(path.join(__dirname,'public','index.html'), (err,data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    // For about page
    if(req.url==='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'), (err,data) => {
            if(err) throw err;
            res.end(data);
        });
    }
    // If need an API
    if(req.url === '/api/users'){
        const users = [
            {name: 'Deepti', city: 'San Jose'},
            {name: 'Anunay', city: 'San Jose'}
        ];
        res.end(JSON.stringify(users));
        res.writeHead(200, {'Content-Type':'application/json'});
    }
});

const PORT = process.env.PORT || 5000; 

server.listen(PORT, () => {console.log(`Server running on ${PORT}.`)});