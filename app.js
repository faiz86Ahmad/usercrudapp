const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const router = require("./routes/userRoute");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000


// Middlewares
dotenv.config({path:'./config.env'})
app.use(express.json());

app.use(cors());
app.use("/users", router);




 if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
    const path = require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client",'build','index.html'))
   })
 }



mongoose
  .connect(
    "mongodb+srv://faiz:faizanahmad@cluster0.xoqop0h.mongodb.net/userdata?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

