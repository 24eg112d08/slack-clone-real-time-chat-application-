import express from "express";
import {
  sendMessage,
  getMessages,
} from "../controllers/message.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Message routes require authentication and allow sending/getting messages.
router.post("/message", protect, sendMessage); // Send a new message.
router.get("/messages/:channelId", protect, getMessages); // Retrieve messages for a channel.

export default router;