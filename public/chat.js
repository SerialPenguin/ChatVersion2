//Make Connection
const socket =  io.connect("https://serialpenguin.github.io/ChatVersion1/");

//Query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");


//Emit events
btn.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    })
});

//Listen for events
socket.on("chat", (data) => {
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
})