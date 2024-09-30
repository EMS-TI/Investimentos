document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Simulação de registro
    if (newUsername && newPassword) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar lógica para salvar o usuário
    } else {
        registerErrorMessage.style.display = 'block';
        registerErrorMessage.innerText = 'Por favor, preencha todos os campos.';
    }
});
