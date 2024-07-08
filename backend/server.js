const app=require("./app");
const dontenv=require("dotenv");
const connectDB= require("./config/database");
//config
dontenv.config({path:"./config/config.env"})


//connecting to database
connectDB()

app.listen( process.env.PORT,()=>{
    console.log(`server on port ${ process.env.PORT}`)
})

