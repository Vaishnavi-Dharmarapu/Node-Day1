const express = require('express')
const app = express();
//import 'dotenv/config'
require ('dotenv').config()
app.get("/",(req,res)=>{
    res.status(200).send("This is home page")
})
app.get("/google",(req,res)=>{
    res.status(200).send({"msg":"This is google page"})
})
app.get("/facebook",(req,res)=>{
    res.status(200).send({"msg":"This is facebook page"})
})
app.get("/twitter",(req,res)=>{
    res.status(200).send("<h1>Twitter Page</h1>")
})

const port_number=process.env.PORT || 3000
app.listen(port_number,()=>{
    console.log(`app is running fine on port ${port_number}`);
    
})