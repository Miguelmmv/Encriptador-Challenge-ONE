function validarTexto(text) {
    // Expresión regular para verificar que solo hay letras minúsculas
    // Preferi hacerlo así en lugar de usar conficionales o ciclos
    // ^ indica el inicio del texto.
    // [a-z] representa un rango de letras minúsculas de la 'a' a la 'z'.
    // \n incluye saltos de linea
    // \s incluye espacios en blanco
    // * indica que pueden haber muiltiples caracteres en el rango especificado.
    // si se quiere uno o más se usaria + en lugar de *
    // $ indica el final del texto.
    const regex = /^[a-z\n\s]*$/;
    if (regex.test(text)) {
        return true;
    }
}

function encryptText() {
    const textInput = document.getElementById("text-input").value;
    let textDecrypt = document.getElementById("text-decrypt");
    if (validarTexto(textInput)) {
        const textKeys = {
            e: "enter",
            i: "imes",
            a: "ai",
            o: "ober",
            u: "ufat",
        };
        // Recorre los elementos en el objecto por la clave y los reemplaza con el valor correspondiente si los encuentra en el texto
        let textEncry = textInput;
        for (let key in textKeys) {
            if (textKeys.hasOwnProperty(key)) {
                textEncry = textEncry.replaceAll(key, textKeys[key]);
            }
        }
        const defaultMessage = document.getElementById("default-message");
        if (defaultMessage) {
            defaultMessage.style.display = "none";
        }
        textDecrypt.innerHTML =
            '<textarea cols="30" rows="15" type="text">' +
            textEncry +
            "</textarea>";
        // hace visible el boton copiar
        // const btnCopy = document.getElementById("btn-copy");
        btnCopy.style.visibility = "visible";
    } else {
        console.log(
            "Texto invalido, solo letras minusculas sin caracteres especiales"
        );
    }
}

function decryptText() {
    const textInput = document.getElementById("text-input").value;
    let textDecrypt = document.getElementById("text-decrypt");
    if (validarTexto(textInput)) {
        const textKeys = {
            enter: "e",
            imes: "i",
            ai: "a",
            ober: "o",
            ufat: "u",
        };

        let textEncry = textInput;
        for (let key in textKeys) {
            if (textKeys.hasOwnProperty(key)) {
                textEncry = textEncry.replaceAll(key, textKeys[key]);
            }
        }
        const defaultMessage = document.getElementById("default-message");
        if (defaultMessage) {
            defaultMessage.style.display = "none";
        }
        textDecrypt.innerHTML =
            '<textarea cols="30" rows="10" type="text">' +
            textEncry +
            "</textarea>";
        // hace visible el boton copiar
        // const btnCopy = document.getElementById("btn-copy");
        btnCopy.style.visibility = "visible";
    } else {
        console.log(
            "Texto invalido, solo letras minusculas sin caracteres especiales"
        );
    }
}

function copyText() {
    const textDecrypt = document.querySelector("#text-decrypt textarea");
    navigator.clipboard.writeText(textDecrypt.value);
}
// Obtener los botones y agregar los event listeners
const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.getElementById("btn-copy");

btnEncrypt.addEventListener("click", encryptText);
btnDecrypt.addEventListener("click", decryptText);
btnCopy.addEventListener("click", copyText);
