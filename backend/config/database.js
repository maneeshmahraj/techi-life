const mongoose=require("mongoose");

const connectDB=()=>{
  mongoose.connect(process.env.MONGI_URI,{useNewUrlParser:true,useUnifiedParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
    console.log(`mongodb connected with server : ${data.connection.host}`).catch((err)=>{
      console.log(err)
    })
  });
};

module.exports=connectDB;