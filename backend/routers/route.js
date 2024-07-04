
const express=require("express");

const router=express.Router();
const productController=require("../controllers/productController")

router.get("/product",productController.insert)


module.exports=router