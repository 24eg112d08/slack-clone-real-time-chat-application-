import mongoose from "mongoose";

// User model schema defines the structure for user documents in MongoDB.
// Includes username, email, password, avatar URL, and a user role.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Timestamps create createdAt and updatedAt fields automatically.
export default mongoose.model("User", userSchema);