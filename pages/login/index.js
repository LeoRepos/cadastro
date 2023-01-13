function login(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailValidit = 'leo@dias.com';
    let senhaValidit = '123';

    
    if (email.value == emailValidit && password.value == senhaValidit) {
        window.alert('Seja Bem vindo!!');
        window.location.href = "http://127.0.0.1:5500/pages/create_user/index.html"; 
    } else {
        window.alert('Verifique os dados digitados, usuário não encontrado!')
    }
}