const express=require("express");
const app=express();
<<<<<<< HEAD
const router=require("./routers/route");

const DATA_URL=process.env.URL;
console.log(DATA_URL);
app.use(cors());
=======
>>>>>>> 72a089236df551b16370bf26d555aa2442d64aef

app.use(express.json());

//routtes import
const product=require("./routers/productRoute");

app.use("/api/v1",product)


module.exports=app;