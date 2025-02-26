const express= require('express');
const user=require('./userControler');



const server= express();



server.use(express.json());
server.use('/user',user)









server.listen("9000",()=>{
    console.log("server runnig one port 9000");
    
})