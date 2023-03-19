const http = require('http');  //http server object
const fs = require('fs'); 
const greetingPage = fs.readFileSync('../html/index.html');  

 

//creates http server. Depending on the hour of day, returns a different greeting 
const server = http.createServer((req,res)=>{
    console.log(req.url); 
    res.end(greetingPage);
}); 
server.listen(3000); 