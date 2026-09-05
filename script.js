// Get DOM elements
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const messagesContainer = document.getElementById('messagesContainer');

// Add event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && messageInput.value.trim()) {
        sendMessage();
    }
});

// Function to send message
function sendMessage() {
    const messageText = messageInput.value.trim();
    
    if (!messageText) return;

    // Create sent message
    const sentMessageDiv = document.createElement('div');
    sentMessageDiv.classList.add('message', 'sent');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = messageText;

    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.textContent = getCurrentTime();

    sentMessageDiv.appendChild(messageContent);
    sentMessageDiv.appendChild(messageTime);

    messagesContainer.appendChild(sentMessageDiv);
    
    // Clear input
    messageInput.value = '';
    messageInput.focus();

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate received message after a delay
    setTimeout(() => {
        addReceivedMessage(getRandomReply());
    }, 500 + Math.random() * 1000);
}

// Function to add received message
function addReceivedMessage(text) {
    const receivedMessageDiv = document.createElement('div');
    receivedMessageDiv.classList.add('message', 'received');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;

    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.textContent = getCurrentTime();

    receivedMessageDiv.appendChild(messageContent);
    receivedMessageDiv.appendChild(messageTime);

    messagesContainer.appendChild(receivedMessageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Get current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

// Random reply messages
function getRandomReply() {
    const replies = [
        'That sounds great! 😊',
        'I agree with you! 👍',
        'Haha, that\'s funny! 😂',
        'Let me think about that...',
        'Tell me more! 👂',
        'That\'s awesome! 🎉',
        'I understand! ✨',
        'Cool! What else? 🤔',
        'Thanks for sharing! 💬',
        'See you soon! 👋'
    ];
    
    return replies[Math.floor(Math.random() * replies.length)];
}

// Scroll to bottom on page load
window.addEventListener('load', () => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});