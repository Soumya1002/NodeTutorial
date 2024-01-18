const fs = require('fs');


const requestHandler=(req,res)=>{
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
    
        return req.on('end', () => {
            console.log("end event executed");
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=");
    
            fs.writeFile('result.txt', message[1], (err)=>{
                console.log("write file executed");
                    res.setHeader('Location', '/');
                    res.statusCode = 302;
                    return res.end();                      
                });               
          })      
    }        
    
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Nodejs tutorial</title></head>');
    res.write('<body><h1>Hello from App.js</h1></body>');
    res.write('</html>');
    return res.end();
}

module.exports=requestHandler;