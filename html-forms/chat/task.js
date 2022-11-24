
const robotMessages = ['a', 'b', 'c', 'd', 'e', 'delay']; // Сообщения робота.
let lastAnswerDate, intervalID;
const chatContainer = document.body.querySelector('.chat-widget__messages-container');
const chatWidget = document.body.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    lastAnswerDate = new Date().getTime();
    setTimer();    
})

document.body.querySelector('#chat-widget__input').addEventListener('keydown', sendMessage);

function setTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        console.log(new Date().getTime() - lastAnswerDate);
        if (new Date().getTime() - lastAnswerDate > 29999) {
            document.querySelector( '.chat-widget__messages' ).innerHTML += 
                `<div class="message">
                    <div class="message__time">${new Date().toString().slice(16,21)}</div>
                    <div class="message__text">${robotMessages[robotMessages.length -1]}</div>
                </div>`;
                chatContainer.scrollTop = chatContainer.scrollHeight;
                lastAnswerDate = new Date().getTime();
                setTimer();
        }
    }, 30000);
}

function sendMessage(env) {
        
    if (env.keyCode === 13) {
        if(this.value) {
              document.querySelector( '.chat-widget__messages' ).innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${new Date().toString().slice(16,21)}</div>
                <div class="message__text">${this.value}</div>
            </div>`;
            chatContainer.scrollTop = chatContainer.scrollHeight;
            this.value = '';
            
            const iMessage = Math.floor(Math.random() * 5);
            
            document.querySelector( '.chat-widget__messages' ).innerHTML += 
            `<div class="message">
                <div class="message__time">${new Date().toString().slice(16,21)}</div>
                <div class="message__text">${robotMessages[iMessage]}</div>
            </div>`;
        lastAnswerDate = new Date().getTime();
        setTimer();
        chatContainer.scrollTop = chatContainer.scrollHeight;    
        }

    }
}