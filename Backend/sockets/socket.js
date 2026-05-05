import { Server } from "socket.io";

let io;

// Initialize Socket.IO and handle real-time channel joins and messaging.
export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    // Join the socket room for a channel to receive messages sent there.
    socket.on("join_channel", (id) => socket.join(id));

    // Relay incoming messages to all sockets in the same channel room.
    socket.on("send_message", (data) => {
      io.to(data.channelId).emit("receive_message", data);
    });
  });
};

// Retrieve the initialized Socket.IO instance for use in other modules.
export const getIO = () => io;