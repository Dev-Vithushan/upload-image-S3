const express=  require("express")
const multer = require("multer")
const app = express()

const upload = multer({dest:"upload/"})

//single file upload
app.post("/upload", upload.single("file"), (req,res)=>{
    res.json({status:"success"})
})

//Multiple file upload
app.post("/upload", upload.array("file"), (req,res)=>{
    res.json({status:"success"})
})


//Multiple file upload with different name
const multiUpload = upload.fields([
    {name:"avatar", maxCount:1},
    {name:"resume", maxCount:1}
])

app.post("/upload", multiUpload, (req,res)=>{
    res.json({status:"success"})
})


app.listen(3000, ()=>{ console.log("Connected")})