const comprar = () => {
    const cantidad1 = 
    document.querySelector("#stickers1").value == ""
    ? 0
    : document.querySelector("#stickers1").value;

    const cantidad2 = 
    document.querySelector("#stickers2").value == ""
    ? 0
    : document.querySelector("#stickers2").value;

    const cantidad3 = 
    document.querySelector("#stickers3").value == ""
    ? 0
    : document.querySelector("#stickers3").value;

    const total = parseInt(cantidad1) + parseInt(cantidad2) + parseInt(cantidad3);
    const resultado = document.querySelector('#cantidad');

    if (total <= 10) {
        resultado.innerHTML = "llevas" + total + "stickers";
    }
    else{
        resultado.innerHTML = "llevas demasiados stickers";
    }
};