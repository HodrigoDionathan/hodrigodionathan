function comprarEbook() {
    alert("Obrigado pelo interesse! Em breve você será redirecionado para a página de compra.");
    // Aqui você pode adicionar o redirecionamento para a página de compra do ebook
}

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar o código para enviar o formulário
});

// Funções do Chat Widget
function toggleChat() {
    const popup = document.getElementById('chat-popup');
    popup.classList.toggle('show');
}

function sendToWhatsApp() {
    const message = document.getElementById('user-message').value;
    if (message.trim() !== '') {
        const phoneNumber = '5521980023732'; // Seu número do WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
        
        // Limpa a mensagem após enviar
        document.getElementById('user-message').value = '';
    }
}

// Adiciona evento de Enter para enviar mensagem
document.getElementById('user-message').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendToWhatsApp();
    }
}); 
