document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de login
    if (username === 'admin' && password === '1234') {
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
