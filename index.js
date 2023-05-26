function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    // Validar el texto ingresado
    if (!/^[a-z\s]+$/.test(texto)) {
        muneco.src = "./Images/muneco.png";
        tituloMensaje.textContent = "Texto inválido";
        parrafo.textContent = "Ingresa solo letras minúsculas sin acentos ni carácteres especiales";
        alert("El texto ingresado no es válido.");
        return;
    }

    let textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./Images/Encriptador.png";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    // Validar el texto ingresado
    if (!/^[a-z\s]+$/.test(texto)) {
        muneco.src = "./Images/muneco.png";
        tituloMensaje.textContent = "Texto inválido";
        parrafo.textContent = "Ingresa solo letras minúsculas sin acentos ni caracteres especiales";
        alert("El texto ingresado no es válido.");
        return;
    }

    let textoCifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./Images/desencriptado.png";
}
function copiarTexto() {
    let texto = document.getElementById("texto").value;

    // Verificar si hay texto para copiar
    if (texto === "") {
        alert("No hay texto para copiar.");
        return;
    }

    // Crear un elemento de texto temporal
    let tempElement = document.createElement("textarea");
    tempElement.value = texto;
    document.body.appendChild(tempElement);

    // Seleccionar el contenido del elemento de texto temporal
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempElement);

    // Mostrar una notificación o mensaje de éxito
    alert("Texto copiado al portapapeles");
}

function limitarCaracteres() {
    var texto = document.getElementById("texto");
    var mensaje = document.getElementById("parrafo");
  
    if (texto.value.length > 180) {
      texto.value = texto.value.slice(0, 180); // Limitar el texto a 180 caracteres
      mensaje.textContent = "Has alcanzado el límite de caracteres (180)";
    } else {
      mensaje.textContent = "";
    }
  }