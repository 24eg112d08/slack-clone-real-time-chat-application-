const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: 2,
      maxlength: 30,
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },

    passwordHash: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8
    },

    avatarUrl: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["online", "offline", "away"],
      default: "offline"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("User", userSchema);