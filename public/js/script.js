const sendBtn = document.getElementById('sendBtn');
const textBox = document.getElementById('textBox');

let user = {mensagem:""};

sendBtn.addEventListener('click', (e) => {
    let userMessage = textBox.value;

    if (userMessage == ""){
        alert("Por favor digite uma mensagem!")
    }else{
        let userMessageText = userMessage.trim();
        user.mensagem = userMessageText;

    }
})