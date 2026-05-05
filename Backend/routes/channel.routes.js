import express from "express";
import {
  createChannel,
  getChannels,
} from "../controllers/channel.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Channel routes are protected and require a valid JWT token.
router.post("/channel", protect, createChannel); // Create a new channel.
router.get("/channels", protect, getChannels); // Get the list of all channels.

export default router;