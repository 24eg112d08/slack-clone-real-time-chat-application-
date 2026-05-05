import Message from "../models/Message.js";
import { getIO } from "../sockets/socket.js";

export const sendMessage = async (req, res) => {
  const { channelId, content } = req.body;

  const message = await Message.create({
    sender: req.user._id,
    channelId,
    content,
  });

  const io = getIO();
  io.to(channelId).emit("receive_message", message);

  res.json(message);
};

export const getMessages = async (req, res) => {
  const messages = await Message.find({
    channelId: req.params.channelId,
  }).populate("sender");

  res.json(messages);
};