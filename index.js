const express=  require("express")
const multer = require("multer")
const app = express()

const upload = multer({dest:"upload/"})

app.post("/upload", upload.single("file"), (req,res)=>{
    res.json({status:"success"})
})


app.listen(3000, ()=>{ console.log("Connected")})