let senhaFormat = document.querySelector("#info-senha");
let emailFormat = document.querySelector("#info-email");

let botaoConfirmar = document.querySelector("#botaoConfirmar");

botaoConfirmar.addEventListener("click", function (event) {
    try {
        event.preventDefault();

        if (emailFormat.value == "senac@senac.com.br" && senhaFormat.value == "1") {
    
            let a = document.getElementById("mudanca-tela");
    
            a.href = "index.html";
    
            window.open("index.html");
            window.close("login.html");
    
        }else{
            alert('Login incorreto')
        }
    } catch (error) {
        alert(error)
    }
});