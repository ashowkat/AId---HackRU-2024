// chatbotscript.js
function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value;

    if (userMessage.trim() !== "") {
        // Append the user's message
        appendMessage(userMessage, "user-message");
        
        // Clear input
        userInput.value = "";

        // Basic bot response
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, "bot-message");

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function appendMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("hello")) {
        return "Hi there! I am your AI therapist, AIda. How can I assist you?";
    } else if (lowerCaseMessage.includes("help")) {
        return "Sure, what do you need help with?";
    } 
    else if(lowerCaseMessage.includes("feel")){
        return "Everything will be ok, and it will pass."
    }
    else if(lowerCaseMessage.includes("pain")){
        return "I'm sorry you feel that way. Pain travels through generations until someone is willing to feel it.";
    }
    else if(lowerCaseMessage.includes("stress")){
        return "If you are stressed, take a minute to meditate. This will allow you to relax and calm your nerves. Try out some breathing excersises. This can help mediate your breathing and let you focus better.";
    }
    else if(lowerCaseMessage.includes("hurt")){
        return "I understand how you feel. How about you explain more about your feelings and we can talk it through?";
    }
    else if(lowerCaseMessage.includes("anxi")){
        return "I'm sorry you feel that way. Take a minute for yourself and think about a place or someone you feel the happiest with.";
    }
    else if(lowerCaseMessage.includes("")){
        return "";
    }
    else if(lowerCaseMessage.includes("bye")){
        return "Okay bye! I'm proud you were able to talk it out with me and I hope you feel better. :)";
    }
    else {
        return "How do you feel about that?";
    }
}
