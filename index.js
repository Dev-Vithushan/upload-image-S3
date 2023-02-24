const express=  require("express")

const app = express()

app.post("/upload", (res,req)=>{
    res.json({status:"success"})
})