import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    socket.on("join_channel", (id) => socket.join(id));

    socket.on("send_message", (data) => {
      io.to(data.channelId).emit("receive_message", data);
    });
  });
};

export const getIO = () => io;