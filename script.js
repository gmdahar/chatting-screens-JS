document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input-1');
    const sendIcon1 = document.querySelector('#input-1 + .send-icon');
    const messages1 = document.getElementById('messages-1');

    const input2 = document.getElementById('input-2');
    const sendIcon2 = document.querySelector('#input-2 + .send-icon');
    const messages2 = document.getElementById('messages-2');

    function createMessageElement(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = text;

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        const now = new Date();
        messageTime.textContent = `${now.getHours()}:${now.getMinutes()}`;

        const doubleTicks = document.createElement('svg');
        doubleTicks.classList.add('double-ticks');
        doubleTicks.setAttribute('viewBox', '0 0 24 24');
        doubleTicks.innerHTML = '<path d="M12 17.27l-6.18 3.24 1.18-6.89-5.04-4.92 6.94-1.01L12 2l3.1 6.69 6.94 1.01-5.04 4.92 1.18 6.89z"/>';

        messageContent.appendChild(doubleTicks);
        messageContent.appendChild(messageTime);
        messageDiv.appendChild(messageContent);

        return messageDiv;
    }

    function sendMessage(input, messagesContainer, otherContainer) {
        const text = input.value.trim();
        if (text) {

           

            const messageElement = createMessageElement(text, 'sent');
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            input.value = '';

            // Simulate receiving a message after a delay
            setTimeout(() => {
                const receivedMessageElement = createMessageElement(text, 'received');
                otherContainer.appendChild(receivedMessageElement);
                otherContainer.scrollTop = otherContainer.scrollHeight;
            }, 500); // Adjust delay as needed
        }
    }

    sendIcon1.addEventListener('click', () => sendMessage(input1, messages1, messages2));
    input1.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {

            var audio = new Audio('sentSound.mp3');
                

            sendMessage(input1, messages1, messages2);
            audio.play();  
        }
    });

    sendIcon2.addEventListener('click', () => sendMessage(input2, messages2, messages1));
    input2.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            
            var audio2 = new Audio('sentSound.mp3');
            

            sendMessage(input2, messages2, messages1);
            
            audio2.play();  
        }
    });
});
