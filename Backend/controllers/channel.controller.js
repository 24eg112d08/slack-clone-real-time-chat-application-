import Channel from "../models/Channel.js";

// Create a new channel and add the requesting user as a member and owner.
export const createChannel = async (req, res) => {
  const { name } = req.body;

  // The protected auth middleware attaches req.user from the token.
  const channel = await Channel.create({
    name,
    members: [req.user._id],
    createdBy: req.user._id,
  });

  res.json(channel);
};

// Return all channels, including member details.
export const getChannels = async (req, res) => {
  // Populate the member references so client receives full user objects.
  const channels = await Channel.find().populate("members");
  res.json(channels);
};