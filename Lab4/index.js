import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT || 2000
const app =express()
app.use(express.json());
app.use((req,res,next) => {
    console.log((`${req.method} request was made to:${req.url}`));
    next();

})
app.use((req,res,next)=>{
    res.status(404).send("requested page not found")
})
app.get('/crime',(req,res)=>{
    res.status(404).send({"msg":"please fire up some safe content"})
})
app.post("/form",(req,res)=>{
    const{name,age}=req.body
    res.status(201).send(`Person's name is ${name} and their age is ${age}`)
})
app.post("/auth",(req,res)=>{
    const {username,password}=req.body
    if(username=='admin' && password=='admin'){
        res.status(200).send('authorized')

    }else{
        res.status(201).send('invalid')
    }
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
app.get("/",(req,res)=>{
    const data ={
        "name":"vaish",
        "email":"vaish@yahoo.com",
        "city":"Hyd",
        "age":20
    }
    res.status(200).send(data)
})
