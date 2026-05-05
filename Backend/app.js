// Main Express app configuration for the backend API.
// Applies middleware and mounts route handlers for auth, channels, and messages.
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

// Enable CORS for browser clients and parse JSON request bodies automatically.
app.use(cors());
app.use(express.json());

// Mount application route modules under base paths.
app.use("/auth", authRoutes);
app.use("/channel-api", channelRoutes);
app.use("/message-api", messageRoutes);

// Health-check route for the API root.
app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;