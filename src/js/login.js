// VALIDAÇÃO LOGIN
var login = document.getElementById("login").value;
var senha = document.getElementById("senha").value;

function logar(){
    if(login == "admin" && senha == "admin"){
        alert("Login Efetuado com Sucesso! Volte à Página Principal")
        location.href = "login.html"
    }
    else{
        alert("Login ou Senha Incorretos.")
    }
}