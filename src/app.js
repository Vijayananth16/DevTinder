const express=require("express")

const app=express()

app.use("/test",(req,res)=>{
    res.send("'test' from the server nodemon")
})
app.use("/hello",(req,res)=>{
    res.send("'hello' from the server ")
})
app.listen(1818,()=>{
    console.log("Server is Successfully learning in port 1818")
})