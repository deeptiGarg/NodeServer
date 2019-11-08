const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //Build filepath
    let filepath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url);

    // Get extension of the data file
    let extension = path.extname(filepath);

    let contentType = 'text/html';

    switch(extension){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filepath, (err, data) => {
        if(err){
            if(err.code == 'ENOENT'){
                //Page Not found
                fs.readFile(path.join(__dirname,'public','404.html'), (err, content) =>
                {   
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                });
            }
            else{
                //Some server error
                res.writeHead(500);
                res.end(`Server error : ${err.code}`, 'utf8');
            }
        }
        else{
            res.writeHead(200, {'Content-Type':contentType});
            res.end(data, 'utf8');
        }        
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {console.log('server running...')});
