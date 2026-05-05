// Entry point for the backend server. Sets up Express, JSON parsing, and mounts API route handlers.
const express = require("express");

const app = express();
app.use(express.json());

// Mount route modules for authentication, channel management, and messaging.
// Each route file exports an Express router with the endpoints defined.
app.use("/api/v1/auth", require("./apis/auth/auth.routes"));
app.use("/api/v1/channels", require("./apis/channel/channel.routes"));
app.use("/api/v1/messages", require("./apis/message/message.routes"));

// Start the server on port 5000.
app.listen(5000, () => {
  console.log("Server running on port 5000");
});