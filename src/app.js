const express=require("express")

const app=express();
app.get("/",(req,res)=>{
    res.send("welcome to app..")
})

app.use("/signUp",(req,res)=>{
    res.send("signup successfully..")
})
app.use("/login",(req,res,next)=>{
    console.log("password checked")
    if("password"==="passwor"){
        next()
    }else{
        res.send("you are not logged in...")
    }
})
app.use("/login",(req,res)=>{
    res.send("login into app successfully...")
})

app.put("/updateUser",(req,res)=>{
    res.send("updated successfully...")
})

app.get("/getUserData",(req,res)=>{
    res.send("User data sent...")
})

app.get("/showFollowRequest",(req,res)=>{
    res.send("all follow requests..")
})

app.delete("/rejectRequest",(req,res)=>{
    throw new Error("gggggg")
    res.send("request deleted...")
})

app.use("/admin",(req,res,next)=>{
    if("admin"==="admin"){
        next()
    }else{
        res.send("un authorized access...")
    }
})

app.use("/admin/showAllUsers",(req,res)=>{
    res.send("all users...")
})

app.delete("/admin/deleteUser",(req,res)=>{
    res.send("user deleted...")
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something wrong...")
    }
})

app.listen(7777,()=>{
    console.log("server successfully lstening port 7777")
})






















// const express=require("express")
// const { adminAuth, userAuth } = require("./middleware/auth")

// const app=express()

// // app.use("/user",userAuth)

// app.get("/user",(req,res)=>{
//     throw new Error("errorrr")
//    res.send("user data")
// })

// app.use("/",(err,req,res,next)=>{
//     if(err)res.status(500).send("something wrong")
// })
// // app.use("/admin",adminAuth)
// // app.get("/admin/al",(req,res,next)=>{     
// //     // console.log("2nd response")
// //     res.send("all data")    
  
// //     }    
// // )
// // app.get("/admin/deleteUser",(req,res,next)=>{     
// //     console.log("2nd response")
// //     res.send("Deleted a user")    
// //     }    
// // )


// // app.use("/route",[rh1,rh2,rh3,rh4,rh5])


// app.listen(1818,()=>{
//     console.log("Server is Successfully learning in port 1818")
// })