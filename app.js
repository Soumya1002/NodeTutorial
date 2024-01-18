const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Details</title></head>');
        res.write('<body><form action="/message" method="POST" enctype="application/x-www-form-urlencoded">Message:<input type="text" name="message"><button type="submit" value="send">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body=[];

        req.on('data', (chunk) => {
           console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=");
            fs.writeFileSync('result.txt', message[1]);
        })         
            fs.writeFileSync('hello.txt', "DUMMY");
            res.setHeader('Location', '/');
            res.statusCode = 302;
            return res.end();
            
        }    
    

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Nodejs tutorial</title></head>');
    res.write('<body><h1>Hello from App.js</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(8000);
