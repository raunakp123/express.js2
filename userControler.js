const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send(" gatedata")
})

router.post('/',(req,res)=>{
    res.send("post data")
})

module.exports=router