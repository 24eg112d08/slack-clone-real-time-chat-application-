import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/channel-api", channelRoutes);
app.use("/message-api", messageRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

export default app;