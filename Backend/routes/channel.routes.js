import express from "express";
import {
  createChannel,
  getChannels,
} from "../controllers/channel.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/channel", protect, createChannel);
router.get("/channels", protect, getChannels);

export default router;