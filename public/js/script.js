import {arrayOfPossibleMessage} from './responses.js'

const sendBtn = document.getElementById('sendBtn');
const textBox = document.getElementById('textBox');
const chatContainer = document.getElementById('chatContainer');

let user = {mensagem:""};

async function sendMessage(userMessage) {
   let messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right'
    messageElement.style.width = '300px';
    messageElement.style.position = 'relative';
    messageElement.style.left = '320px';
    messageElement.style.fontSize = '20px';
    messageElement.style.backgroundColor = 'white';
    messageElement.style.padding = '10px';
    messageElement.style.borderRadius = '15px';
    messageElement.style.border = '1px solid black';
    messageElement.style.margin = '10px';
   messageElement.innerHTML = "<span> Distribuidor: </span>" +
                        "<span>" + userMessage +"</span>"

    chatContainer.appendChild(messageElement);

}

async function chatBotResponse(userMessage) {
    let chatBotMessage = "";

    let result = arrayOfPossibleMessage.find(val => userMessage.toLowerCase().includes(val.mensagem.toLowerCase()));

    if (result) {
        chatBotMessage = result.response;
    }

    if (chatBotMessage !== "") {
        let messageElement = document.createElement('div');
        messageElement.style.margin = '10px';
        messageElement.style.fontSize = '20px';
        messageElement.style.fontWeight = 'bolder';
        messageElement.style.width = '400px';
        messageElement.style.textAlign = 'justify';
        messageElement.style.backgroundColor = 'white';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '15px';
        messageElement.style.border = '1px solid black';
        messageElement.style.color = 'blue';
        messageElement.innerHTML ="<span> Electra: </span>" +
            "<span>"+chatBotMessage+"</span>";

        chatContainer.appendChild(messageElement);
    }
    else {
        let messageElement = document.createElement('div');
        messageElement.style.margin = '10px';
        messageElement.style.fontSize = '20px';
        messageElement.style.fontWeight = 'bolder';
        messageElement.style.width = '400px';
        messageElement.style.textAlign = 'justify';
        messageElement.style.backgroundColor = 'white';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '15px';
        messageElement.style.border = '1px solid black';
        messageElement.style.color = 'red';
        messageElement.innerHTML = "<span>Electra: </span>" +
            "<span>Desculpe, não entendi o que você quis dizer.</span>";

        chatContainer.appendChild(messageElement);
    }
}


function escolher(userMessage, chatBotMessage) {
    
    if (userMessage == "oi"){
        chatBotMessage = messageElement.innerHTML = document.createElement = "<span> Escolha uma das opções abaixo: </span>" + "<span> Digite 1 para ver os produtos.</span> \n Digite 2 para pegar os contatos comerciais"
        chatContainer.appendChild(messageElement);
    }    
}

function handleSend() {
    let userMessage = textBox.value;

    if (userMessage == "") {
        alert("Por favor, digite uma mensagem!");
    }
    else {
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
