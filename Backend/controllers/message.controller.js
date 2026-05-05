import Message from "../models/Message.js";
import { getIO } from "../sockets/socket.js";

// Send a message in a channel, persist it, and emit it to channel members via sockets.
export const sendMessage = async (req, res) => {
  const { channelId, content } = req.body;

  // Save the message in MongoDB with a sender reference.
  const message = await Message.create({
    sender: req.user._id,
    channelId,
    content,
  });

  // Broadcast the message to all clients joined in the channel room.
  const io = getIO();
  io.to(channelId).emit("receive_message", message);

  res.json(message);
};

// Get all messages for a specific channel and include sender details.
export const getMessages = async (req, res) => {
  const messages = await Message.find({
    channelId: req.params.channelId,
  }).populate("sender");

  res.json(messages);
};