const express = require("express")
const app = express();
const multer = require("multer");
const path = require("path");

// MIDDLEWARE
app.set("view engine", "ejs");

// MULTER FOR FILE UPLOAD

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "Images")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })

  const uploadStorage = multer({ storage: storage })

  // GET METHOD
app.get("/fileuploads",(req,res)=>{
    res.status(200).render("index")
})


  // Single file-POST METHOD
  app.post("/fileuploads", uploadStorage.single("file"), (req, res) => {
    console.log(req.file)
    return res.status(200).render("end");
  })



app.listen(4000,()=>{
    console.log("server running on 4000...")
})