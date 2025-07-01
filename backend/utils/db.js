import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async ()=>{
    try{
        const connection =await mongoose.connect(process.env.MONGODB_URI+process.env.DB_NAME);
        console.log("Connected to DB",connection.connection.host);
    }catch(error){
        console.log(error)
    }

}

export default connectDB