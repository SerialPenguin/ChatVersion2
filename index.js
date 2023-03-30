const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

//App setup
const app = express();
const server = app.listen(5000, () => {
    console.log("Listening to reuqests on port 5000")
});
app.use(cors())


//Static files
app.use(express.static("public"));

//Socket Setup
const io = socket(server);

io.on("connection", (socket) => {
    console.log("made socket connection", socket.id)

    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    })
})