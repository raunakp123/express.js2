const express= require('express');


const server= express();


server.get('/',(req,res)=>{
    res.send("you are a root")
})
server.get('/abaut',(req,res)=>{
    res.send("you are a about")
})

server.post('/',(req,res)=>{
    res.send("values recived")
})


server.patch('/',(req,res)=>{
    res.send("we updated date")
})

server.delete('/',(req,res)=>{
    res.send("deleted ur data")
})








server.listen("9000",()=>{
    console.log("server runnig one port 9000");
    
})