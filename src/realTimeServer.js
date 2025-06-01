module.exports = (httpServer) => {
  const { Server } = require('socket.io');
  const io = new Server(httpServer);

  const users = new Map();

  const broadcastUsers = () => {
    const userList = Array.from(users.values()).map(u => u.username);
    io.emit("userList", userList);
  };

  io.on("connection", (socket) => {
    socket.on("register", (username) => {
      users.set(socket.id, { username, isNewUser: true });
      socket.emit("registered", { username, isNewUser: true });
      broadcastUsers(); // ✅ Emitimos usuarios conectados
    });

    socket.on("message", (message) => {
      const user = users.get(socket.id);
      io.emit("message", {
        user: user.username,
        message,
        isNewUser: user.isNewUser,
      });
      user.isNewUser = false;
    });

    socket.on("disconnect", () => {
      users.delete(socket.id);
      broadcastUsers(); // ✅ Actualizamos la lista al desconectarse
    });
  });
};
