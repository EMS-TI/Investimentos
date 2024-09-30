// Função de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de login
    if (localStorage.getItem(username) && localStorage.getItem(username) === password) {
        alert('Login bem-sucedido!');
        // Redirecionar para a próxima página (ex: depositos.html)
        // window.location.href = 'depositos.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Nome de usuário ou senha incorretos.';
    }
});

// Mostrar/Ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.innerText = '🙈';
    } else {
        passwordField.type = 'password';
        this.innerText = '👁️';
    }
});

// Função de cadastro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Verificação de cadastro
    if (localStorage.getItem(newUsername)) {
        registerErrorMessage.style.display = 'block';
        registerErrorMessage.innerText = 'Nome de usuário já existe.';
    } else if (newPassword.length < 6) {
        registerErrorMessage.style.display = 'block';
        registerErrorMessage.innerText = 'A senha deve ter pelo menos 6 caracteres.';
    } else {
        localStorage.setItem(newUsername, newPassword);
        alert('Cadastro bem-sucedido! Agora você pode fazer login.');
        window.location.href = 'login.html'; // Redirecionar para a página de login
    }
});
