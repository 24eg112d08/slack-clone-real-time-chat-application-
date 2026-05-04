const express = require("express");

const app = express();
app.use(express.json());

// API routes (will work later)
app.use("/api/v1/auth", require("./apis/auth/auth.routes"));
app.use("/api/v1/channels", require("./apis/channel/channel.routes"));
app.use("/api/v1/messages", require("./apis/message/message.routes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});