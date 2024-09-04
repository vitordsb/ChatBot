import {arrayOfPossibleMessage} from './responses.js'

const sendBtn = document.getElementById('sendBtn');
const textBox = document.getElementById('textBox');
const chatContainer = document.getElementById('chatContainer');

let user = {mensagem:""};

async function sendMessage(userMessage) {
   let messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right'
    messageElement.style.margin = '10px';
   messageElement.innerHTML = "<span> Você: </span>" +
                        "<span>" + userMessage +"</span>"

    chatContainer.appendChild(messageElement);

}

async function chatBotResponse(userMessage) {
    let chatBotMessage = "";

    let result = arrayOfPossibleMessage.find(val => userMessage.toLowerCase().includes(val.mensagem.toLowerCase()));

    if (result) {
        chatBotMessage = result.response.toLowerCase();
    }

    if (chatBotMessage !== "") {
        let messageElement = document.createElement('div');
        messageElement.style.margin = '10px';
        messageElement.style.color = 'blue';
        messageElement.innerHTML = "<span>Jarvis: </span>" +
            "<span>" + chatBotMessage + "</span>";

        chatContainer.appendChild(messageElement);
    }
    else {
        let messageElement = document.createElement('div');
        messageElement.style.margin = '10px';
        messageElement.style.color = 'red';
        messageElement.innerHTML = "<span>Jarvis: </span>" +
            "<span>Desculpe, não entendi o que você quis dizer.</span>";

        chatContainer.appendChild(messageElement);
    }
}
function handleSend() {
    let userMessage = textBox.value;

    if (userMessage === "") {
        alert("Por favor, digite uma mensagem!");
    } else {
        let userMessageText = userMessage.trim();
        user.mensagem = userMessageText;
        textBox.value = "";
        sendMessage(userMessageText);
        chatBotResponse(userMessageText);
    }
}

sendBtn.addEventListener('click', handleSend);

textBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSend();
    }
});
