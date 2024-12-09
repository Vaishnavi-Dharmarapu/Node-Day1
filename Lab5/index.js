
const express = require('express')
require ('dotenv').config()
const path = require('path')
const PORT =process.env.PORT ||2000
const app = express();
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.status(200).send({"msg":"this is home page"})
})
app.post("/auth",(req,res)=>{
    const {username,password}=req.body
    if(username==admin){
        res.status(200).send({"msg":"logged in"})
    }else{
        res.status(400).send({"msg":"invalid credentials"})
    }
})
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
    
})