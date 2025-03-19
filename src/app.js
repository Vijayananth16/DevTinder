const express=require("express")

const app=express()


app.use("/admin",(req,res,next)=>{  
    console.log("checking token")   
    const token="xyz"
    if (token==="xyz") {
        next()
    }else{
        res.send("unauthorized access")
    }
    // x
    }    
)
app.get("/admin/allUser",(req,res,next)=>{     
    // console.log("2nd response")
    res.send("Deleted a user")    
  
    }    
)
app.get("/admin/deleteUser",(req,res,next)=>{     
    console.log("2nd response")
    res.send("Deleted a user")    

    }    
)


// app.use("/route",[rh1,rh2,rh3,rh4,rh5])


app.listen(1818,()=>{
    console.log("Server is Successfully learning in port 1818")
})