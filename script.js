document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de login simples
    if (username === 'admin' && password === '1234') {
        // Redireciona para a página de depósitos
        window.location.href = 'depositos.html';
    } else {
        // Exibe mensagem de erro se as credenciais forem inválidas
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Nome de usuário ou senha incorretos';
    }
});

// Mostrar ou ocultar a senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.innerText = 'Ocultar';
    } else {
        passwordField.type = 'password';
        this.innerText = 'Mostrar';
    }
});
