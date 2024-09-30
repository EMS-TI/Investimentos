document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('errorMessage');

    // Simulando validação de login
    if (username === 'admin' && password === '1234') {
        // Redirecionar para a página de depósitos
        window.location.href = 'depositos.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Nome de usuário ou senha incorretos';
    }
});

// Mostrar/ocultar senha
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
