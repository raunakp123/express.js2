const express= require('express');


const server= express();

function func1(req,res,next){
    console.log("raunak");
    next();
    

}
//server.use((req,res, next)=>{

 //   const user= false;
  //  if (user) {
  //      console.log('time', Date.now());
   //     next();

  //  }else{
 //       res.send("plese login")
 //   }
    
//})


server.get('/',(req,res)=>{
    res.send("you are a root")
})


server.post('/',func1,(req,res)=>{
    res.send("post request")
})












server.listen("9000",()=>{
    console.log("server runnig one port 9000");
    
})