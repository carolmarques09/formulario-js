function enviar() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let erroMsg = document.getElementById('erroMsg');
    erroMsg.textContent = '';

    if (!nome) {
        erroMsg.textContent = 'O campo "Nome" é obrigatório!'
    }

    if (!email) {
        erroMsg.textContent = 'O campo "Email" é obrigatório!'
    }

    if (!senha) {
        erroMsg.textContent = 'O campo "Senha" é obrigatório!'
    }

    alert('Formulário enviado com sucesso!');
}