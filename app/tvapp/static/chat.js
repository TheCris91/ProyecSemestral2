// chat.js
const messages = [
    "Usuario1: Hola, ¿cómo están?",
    "Usuario2: ¡Hola! Estamos bien, gracias.",
    "Usuario1: ¿Alguien ha visto esa nueva película?",
];

let highlightedMessageIndex = -1;

function displayMessages() {
    const chatDiv = document.getElementById("chat");
    chatDiv.innerHTML = messages.join("<br>");
}

function sendMessage() {
    const input = document.getElementById("input");
    const message = input.value;
    if (message.trim() !== "") {
        messages.push("Tú: " + message);
        input.value = "";
        displayMessages();
    }
}

function highlightMessage() {
    const chatDiv = document.getElementById("chat");
    if (highlightedMessageIndex >= 0 && highlightedMessageIndex < messages.length) {
        const highlightedMessage = messages[highlightedMessageIndex];
        chatDiv.innerHTML = chatDiv.innerHTML.replace(highlightedMessage, `<strong>${highlightedMessage}</strong>`);
    }
}

document.getElementById("sendMessageButton").addEventListener("click", sendMessage);
document.getElementById("highlightMessageButton").addEventListener("click", highlightMessage);

displayMessages();
