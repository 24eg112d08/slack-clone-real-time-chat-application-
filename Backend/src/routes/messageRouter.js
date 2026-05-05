import express from "express";
import { getMessages, sendMessage, editMessage, deleteMessage, toggleReaction, getThreadReplies, postThreadReply } from "../controllers/messageController.js";

const channelRouter = express.Router();

channelRouter.get("/:channelId", getMessages);
channelRouter.post("/:channelId", sendMessage);
channelRouter.put("/:channelId/:messageId", editMessage);
channelRouter.delete("/:channelId/:messageId", deleteMessage);
channelRouter.post("/:channelId/:messageId/reactions", toggleReaction);
channelRouter.get("/:channelId/:messageId/threads", getThreadReplies);
channelRouter.post("/:channelId/:messageId/threads", postThreadReply);

export default channelRouter;