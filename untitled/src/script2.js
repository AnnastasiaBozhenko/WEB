
function addMessage(element, message) {
    var messageElement = document.createElement("li");
    messageElement.textContent = message;
    element.appendChild(messageElement);
}
var fist = document.getElementById("first");
addMessage(fist, "Page loading");

document.body.addEventListener("mousemove", function (){
    var second = document.getElementById("second");
    addMessage(second, "Event: mousemove");
});
document.body.addEventListener("click", function () {
    var second = document.getElementById("second");
    addMessage(second, "Event: click");
})

document.body.addEventListener("dblclick", function () {
    var second = document.getElementById("second");
    addMessage(second, "Event: dblclick");
})