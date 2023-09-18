const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Welcom to express")
})
app.get("/index",(req,res)=>{
    res.status(200).send("Welcom to express index")
})
app.get("/index2",(req,res)=>{
    res.status(200).send("Welcom to express index2")
})
app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/signup1",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/signup2",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/signup3",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
app.post("/signup4",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})


app.listen(8888,()=>{
    console.log("Server Started");
})