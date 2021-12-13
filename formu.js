
//formulario
document.querySelector("#botaoEnviar").addEventListener("click", validarFormulario)
function validarFormulario() {

    if (
        document.getElementById("nome").value != "" &&
        document.getElementById("email").value != ""
    ) {
        const nome = document.getElementById("Nome")
         email = document.getElementById("email")

        alert("Prontinho! Você receberá um e-mail com os próximos passos.")
    } else {

        alert("Por favor, preencha os campos!")
    }
};