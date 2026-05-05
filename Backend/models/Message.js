import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
    content: {
      type: String,
      required: true,
    },
    attachments: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);