import express from "express";
import { getAllChannels, createChannel, getChannelById, updateChannel, deleteChannel, joinChannel, leaveChannel, getChannelMembers, addMember, removeMember } from "../controllers/channelController.js";

const channelRouter = express.Router();

channelRouter.get("/", getAllChannels);
channelRouter.post("/", createChannel);
channelRouter.get("/:channelId", getChannelById);
channelRouter.put("/:channelId", updateChannel);
channelRouter.delete("/:channelId", deleteChannel);
channelRouter.post("/:channelId/join", joinChannel);
channelRouter.post("/:channelId/leave", leaveChannel);
channelRouter.get("/:channelId/members", getChannelMembers);
channelRouter.post("/:channelId/members", addMember);
channelRouter.delete("/:channelId/members/:userId", removeMember);

export default channelRouter;