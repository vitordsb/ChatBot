import { arrayOfPossibleMessage } from './responses.js';

document.addEventListener("DOMContentLoaded", function () {
    // Pegando os elementos HTML após o carregamento completo do DOM
    const sendBtn = document.getElementById('sendBtn');
    const textBox = document.getElementById('textBox');
    const chatContainer = document.getElementById('chatContainer');

    let user = { mensagem: "" };
    let interval = null;  // Variável global para armazenar o intervalo da animação

    async function sendMessage(userMessage) {
        let messageElement = document.createElement('div');
        messageElement.style.textAlign = 'right';
        messageElement.style.width = '300px';
        messageElement.style.position = 'relative';
        messageElement.style.left = '320px';
        messageElement.style.fontSize = '20px';
        messageElement.style.backgroundColor = 'white';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '15px';
        messageElement.style.border = '1px solid black';
        messageElement.style.margin = '10px';
        messageElement.innerHTML = "<span>Distribuidor: </span>" +
            "<span>" + userMessage + "</span>";

        chatContainer.appendChild(messageElement);
    }

    async function chatBotResponse(userMessage) {
        let chatBotMessage = "";

        let result = arrayOfPossibleMessage.find(val => userMessage.toLowerCase().includes(val.mensagem.toLowerCase()));
        let typingElement = createTypingElement("Electra");
        chatContainer.appendChild(typingElement);
        let dots = document.getElementById('dots');
        animateDots(dots);
        await new Promise(resolve => setTimeout(resolve, 1000));
        clearInterval(interval);
        interval = null;
        chatContainer.removeChild(typingElement); 
        if (userMessage.trim().toLowerCase() === "opções") {
            escolher(userMessage);
        } else {
            chatBotMessage = result ? result.response : "Desculpe, não entendi o que você quis dizer.";
            displayChatBotMessage(chatBotMessage, result ? "blue" : "red");
        }
    }

    function createTypingElement(name) {
        let typingElement = document.createElement('div');
        typingElement.style.margin = '10px';
        typingElement.style.fontSize = '20px';
        typingElement.style.fontWeight = 'bolder';
        typingElement.style.width = '400px';
        typingElement.style.textAlign = 'justify';
        typingElement.style.backgroundColor = 'white';
        typingElement.style.padding = '10px';
        typingElement.style.borderRadius = '15px';
        typingElement.style.border = '1px solid black';
        typingElement.style.color = 'blue';
        typingElement.innerHTML = `<span>${name}: </span><span id='dots'>Energizando</span>`;
        return typingElement;
    }

    function animateDots(element) {
        let dotCount = 0;
        interval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            element.innerHTML = 'Energizando' + '.'.repeat(dotCount);
        }, 200);
    }

    function displayChatBotMessage(message, color) {
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
        messageElement.style.color = color;
        messageElement.innerHTML = `<span>Electra: </span><span>${message}</span>`;
        chatContainer.appendChild(messageElement);
    }

    async function escolher(userMessage) {
        let typingElement = createTypingElement("Electra");

        chatContainer.appendChild(typingElement);
        let dots = document.getElementById('dots');
        animateDots(dots);

        await new Promise(resolve => setTimeout(resolve, 2000));

        clearInterval(interval);
        interval = null;
        chatContainer.removeChild(typingElement);

        let optionsElement = document.createElement('div');
        optionsElement.style.margin = '10px';
        optionsElement.style.fontSize = '20px';
        optionsElement.style.fontWeight = 'bolder';
        optionsElement.style.width = '400px';
        optionsElement.style.textAlign = 'justify';
        optionsElement.style.backgroundColor = 'white';
        optionsElement.style.padding = '10px';
        optionsElement.style.borderRadius = '15px';
        optionsElement.style.border = '1px solid black';
        optionsElement.style.color = 'blue';
        optionsElement.innerHTML = "<span>Escolha uma das opções abaixo:</span><br>";

        let option1 = createOption("1. Ver os produtos", "Você escolheu ver os produtos.");
        let option2 = createOption("2. Pegar os contatos comerciais", "Você escolheu pegar os contatos comerciais.");

        optionsElement.classList.add('option');
        optionsElement.appendChild(option1);
        optionsElement.appendChild(option2);

        chatContainer.appendChild(optionsElement);
    }

    function createOption(text, alertMessage) {
        let option = document.createElement('div');
        option.innerHTML = text;
        option.style.cursor = 'pointer';
        option.style.marginTop = '5px';
        option.onclick = () => {
            alert(alertMessage);
            removeOptions();
        };
        return option;
    }

    function removeOptions() {
        const optionsElement = document.querySelectorAll('.option');
        optionsElement.forEach(option => option.remove());
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
});
