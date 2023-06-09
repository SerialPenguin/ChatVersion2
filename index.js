require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

//App setup
const app = express();
const server = app.listen(process.env.PORT, () => {
    console.log("Listening to reuqests on port 5000")
});
app.use(cors())


//Static files
app.use(express.static("public"));

//Socket Setup
const io = socket(server);

io.on("connection", (socket) => {
    console.log("made socket connection", socket.id);


// Handle chat event
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    
});

socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data)


});

});