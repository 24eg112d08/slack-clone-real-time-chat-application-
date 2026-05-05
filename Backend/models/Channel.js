import mongoose from "mongoose";

// Channel model schema stores chat channel metadata and membership information.
const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// The createdBy field points to the user who created the channel.
export default mongoose.model("Channel", channelSchema);