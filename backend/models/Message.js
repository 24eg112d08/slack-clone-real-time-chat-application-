const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    emoji: String,
    userIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { _id: false }
);

const fileSchema = new mongoose.Schema(
  {
    url: String,
    mimeType: String,
    size: Number,
    name: String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { _id: true }
);

const messageSchema = new mongoose.Schema(
  {
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel"
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    content: {
      type: String,
      trim: true
    },

    files: [fileSchema],

    reactions: [reactionSchema],

    threadCount: {
      type: Number,
      default: 0
    },

    parentMessageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    },

    isEdited: {
      type: Boolean,
      default: false
    },

    editedAt: Date
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Message", messageSchema);