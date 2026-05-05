import express from "express";
import {
  sendMessage,
  getMessages,
} from "../controllers/message.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/message", protect, sendMessage);
router.get("/messages/:channelId", protect, getMessages);

export default router;