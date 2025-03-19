const adminAuth=(req,res,next)=>{
    if("xyz"==="xyz"){
        next()
    }else{
        res.send("un authorized access")
    }
}
const userAuth=(req,res,next)=>{
    if("xyz"==="xyz"){
        next()
    }else{
        res.send("un authorized access")
    }
}

module.exports={adminAuth,userAuth}

