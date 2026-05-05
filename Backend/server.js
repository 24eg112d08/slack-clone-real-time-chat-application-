import express from "express";
import authRoutes from "./src/routes/authRouter.js";
import channelRoutes from "./src/routes/channelRouter.js";
import messageRoutes from "./src/routes/messageRouter.js";
import dmRoutes from "./src/routes/dmRouter.js";
import fileRoutes from "./src/routes/fileRouter.js";

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/channels", channelRoutes);
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/dm", dmRoutes);
app.use("/api/v1/files", fileRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));