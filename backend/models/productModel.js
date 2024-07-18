
const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"please enter valid product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter valid product description"]
    },
    price:{
        type:String,
        required:[true,"please enter Valid product price"],
        maxLength:[8,"price can not exceed 8 character"]
    }
    ,
    rating:{
        type:Number,
       default:0
    },
    images:[
       {
        public_id:{
            type:String,
            required:true
        },
       url:{
            type:String,
            required:true
        }
       }
    ],
    category:{
           type:String,
           required:[true,"please enter valid product Category"]
    },
    stock:{
        type:Number,
        required:[true,"please enter Valid product stock"],
        maxLength:[4,"stock ca not exceed 4 charaters"],
        default:1
    },
    numOfreview:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true,

            },
            comment:{
                type:String,
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("techie_life",productSchema);