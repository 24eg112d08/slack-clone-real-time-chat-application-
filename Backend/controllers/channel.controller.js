import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  const { name } = req.body;

  const channel = await Channel.create({
    name,
    members: [req.user._id],
    createdBy: req.user._id,
  });

  res.json(channel);
};

export const getChannels = async (req, res) => {
  const channels = await Channel.find().populate("members");
  res.json(channels);
};