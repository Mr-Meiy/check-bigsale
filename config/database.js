require('dotenv').config();

const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL,{
         useNewUrlParser:true,useUnifiedTopology:true
     })
     console.log("mongoDb connection success");
    }catch(error){
      console.error("MongoDB connection fail");
      process.exit(1);
    }
};

module.exports=connectDB;
