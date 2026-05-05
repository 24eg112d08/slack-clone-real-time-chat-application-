import mongoose from "mongoose";

// Message model schema represents a chat message inside a channel.
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

// Attachments are stored as a list of file path strings if any files are included.
export default mongoose.model("Message", messageSchema);