const productModel=require("../models/productModel")

exports.createProduct=async(req,res)=>{
    try {
        
        const product=await productModel.create(req.body)
        res.status(201).json({
            success:true,
            product
        })
    } catch (error) {
        
    }
}

exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route is working fine"})

}