//Make Connection
const socket =  io.connect("/");
// const socket =  io.connect("https://serialpenguin.github.io/ChatVersion2/");

//Query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");


//Emit events
btn.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value,
    });
    message.value = "";
});



message.addEventListener("keypress", () => {
    socket.emit("typing", handle.value);

});

message.addEventListener("keypress", (event) => {
    if(event.keyCode === 13) {
        console.log("Enter was pressed!");
        btn.click()
    }
})

//Listen for events
socket.on("chat", (data) => {
    feedback.innerHTML ="";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";

});

socket.on("typing", (data) => {
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>"
})