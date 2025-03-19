const express=require("express")

const app=express()

app.use("/user",(req,res)=>{
    res.send("eeeeeeeeeehhhhheeeeee")
})
app.get("/user",(req,res)=>{
    res.send({"firstName":"vijay","secondName":"Anand"})
})

app.post("/user",(req,res)=>{
    res.send("insert successfully")
})
app.put("/user",(req,res)=>{
    res.send("updated successfully")
})

app.delete("/user",(req,res)=>{
    res.send("deleted")
})
// app.use("/",(req,res)=>{
//     res.send("'default' from the server nodemon")
// })
// app.use("/test",(req,res)=>{
//     res.send("'test' from the server nodemon")
// })

// // app.use("/hello/2",(req,res)=>{
// //     res.send("'hello 2'  ")
// // })
// app.use("/hello",(req,res)=>{
//     res.send("'hello' from the server ")
// })
app.listen(1818,()=>{
    console.log("Server is Successfully learning in port 1818")
})