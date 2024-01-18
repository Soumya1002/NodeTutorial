const http=require('http');


const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
  

    if(url==='/'){
       res.setHeader('Content-type','text/html');
        res.write('<html>'); 
        res.write('<head><title>Enter Details</title></head>');
        res.write('<body><h1>Hello from LOGIN PAGE</h1>');  
        res.write('<form action="/message" method="POST">Message:<input type="text" id="message"><button type="submit" value="send">Send</button></form></body>');  
        res.write('</html>');
        return res.end();
    }

    if(ur==='/message' && method=='POST'){
        res.setHeader('Location','/');
        res.statusCode=302;
    }

    res.setHeader('Content-type','text/html');   
    res.write('<html>'); 
    res.write('<head><title>Nodejs tutorial</title></head>');
    res.write('<body><h1>Hello from App.js</h1></body>');  
    res.write('</html>');
    res.end();
   
});
server.listen(3000);