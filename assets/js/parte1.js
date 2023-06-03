function validBorder() {
    let borderOn = "2px";
    let borderOff = "0px";
    // = -> asignacion
    // == -> comprobacion
    // === -> comprobacion estricta
    if(document.querySelector('#img').style.borderWidth == borderOff){
        document.querySelector('#img').style.borderWidth = borderOn;
    }
    else{
        document.querySelector('#img').style.borderWidth = borderOff;
    }
}