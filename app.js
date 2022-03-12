const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 80;
const static = "./static";
const server = http.createServer((req, res) => {
    console.log(req.url);
    var filePath = static + (req.url === '/' ? '/index.jsp' : req.url);
    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("404 Not found. " + err, 'utf-8');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
