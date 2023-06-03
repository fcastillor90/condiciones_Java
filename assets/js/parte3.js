function verificarPass() {
    let numero1 = document.querySelector("#option1").value;
    let numero2 = document.querySelector("#option2").value;
    let numero3 = document.querySelector("#option3").value;
    let tryResult = document.querySelector("#texto")
    let password = numero1 + numero2 + numero3;
    if (password == "911") {
        tryResult.innerHTML = "Contraseña 1 Correcta";
    } else if (password == "714") {
        tryResult.innerHTML = "Contraseña 2 Correcta";
    } else {
        tryResult.innerHTML = "Contraseña Inconrrecta";
    }
}