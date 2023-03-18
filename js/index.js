const http = require('http');  //http server object
const date = new Date();     //a new Date object
const hour = date.getHours();  //gets the current hour 

 

//creates http server. Depending on the hour of day, returns a different greeting 
const server = http.createServer((req,res)=>{
    console.log(req.url); 
    if(hour < 12){
        res.end('Good Morning World')
    }
    else if(hour >= 12 && hour < 18){
        res.end('Good Afternoon World');
    }
    else{
        res.end('Good Evening World'); 
    }
})
server.listen(3000); 