//Utilizado para formata��o gen�rica de campos, permite apenas d�gitos
function formatar(src, mask) {
    var carCode = event.keyCode;
    if (((carCode < 48) || (carCode > 57))) {
        alert('Por favor digite apenas numeros.');
        event.cancelBubble = true
        event.returnValue = false;
    }
    var i = src.value.length;
    var saida = mask.substring(0, 1);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        src.value += texto.substring(0, 1);
    }
}

//Utilizado para limpar formul�rios
function limpar(nome) {
    document.getElementById(nome).reset();
};
