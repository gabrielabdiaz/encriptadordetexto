
const inputTexto = document.querySelector("#texto");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje () {
    // Borrar errores previos
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err);
    }
    var texto = inputTexto.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of texto) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} no es válida`;
            mensajeError.appendChild(p);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (contenedorErrores.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
	
    if (!validarMensaje()) return;
    var texto = inputTexto.value;
    var textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat"); 
    inputResultado.value = textoEncriptado;
    document.getElementById('ocultar').style.display='none';
}

function desencriptar (){
    if (!validarMensaje()) return;
    var textoEncriptado = inputTexto.value;
    var texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResultado.value = texto;
}

function copiar () {
    var textoEncriptado = inputResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
    inputTexto.value = "";
    inputTexto.focus();
}
 
btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;




