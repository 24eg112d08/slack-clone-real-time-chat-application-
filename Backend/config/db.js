// MongoDB connection helper using Mongoose.
import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables.
    await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    // Log the error and stop the process if the database cannot be reached.
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};