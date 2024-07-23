const mongoose=require("mongoose");
require("dotenv").config();
const connectdb=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Database Connected Successfully"))
    .catch((error)=>{
        console.log("Database Connection Failure");
        console.log(error);
        process.exit(1);
    });
}
module.exports=connectdb;