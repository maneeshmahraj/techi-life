const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express();
const router=require("./routers/route");
require("dotenv").config();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const DATA_URL=process.env.URL;
console.log(DATA_URL);
app.use(cors());

app.use("/api/v1",router);

mongoose.connect("mongodb://localhost:27017/techie-life")


module.exports=app