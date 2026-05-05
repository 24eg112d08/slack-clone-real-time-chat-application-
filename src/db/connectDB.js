import mongoose, { Mongoose } from "mongoose";


const connectDB=async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("✅ MONGO_DB CONNECTED SUCCESSFULLY");
       
    } catch (error) {
        console.error("❌ MONGO_DB NOT CONNECTED");
        process.exit(1);
        
    }
}
export default connectDB;