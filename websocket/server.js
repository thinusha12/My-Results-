const io = require('socket.io')(8080, {
  cors: {
    origin: "http://localhost:4200",
  }
});

let users = [];

const removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId);
}

const addUser = (userId, socketId) => {
  for (var i = 0; i < users.length; i++) {
    if (users[i].userId === userId) {
      users.splice(i, 1);
    }
  }
  users.push({ userId, socketId });
}

const getUser = (userId) => {
  return users.find(user => user.userId === userId);
}

io.on("connection", (socket) => {
  //when connect
  console.log("User Connected");
  //  take userid and socket id from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getusers", users);
  });

  //send and get messge
  socket.on("sendmsg", ({ senderId, recieverId, text }) => {
    let user = null;
    user = getUser(recieverId);
    if (user != null) {
      io.to(user.socketId).emit("getmsg", {
        senderId,
        text
      });
    }
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user diconnected");
    removeUser(socket.id);
    io.emit("getusers", users);
  })
});

