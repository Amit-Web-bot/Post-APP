import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
       const connectionInstance = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGOPASS}@post-app-backend.oeipmfc.mongodb.net/${DB_NAME}`)
       
       console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)    
    }
}

export default connectDB