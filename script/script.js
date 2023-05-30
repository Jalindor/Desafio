var btn_Encriptar = document.getElementById("Btn_Encriptador");
var btn_Desencriptar = document.getElementById("Btn_Desencriptado");
var btn_copy = document.getElementById("button_copy");

var input = document.getElementById("text_input");
var output = document.getElementById("text_output");

var Encriptar = function (encript) {
  encript.preventDefault();

  var inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  inputText = inputText
   .replaceAll("e", "enter")
   .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  output.value = inputText;
};

var Desencriptar = function (decript) {
  decript.preventDefault();

  var inputText = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  inputText = inputText
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  output.value = inputText;
};

var copy = function () {
  navigator.clipboard.writeText(output.value);
};

function demoDisplay() {
  document.getElementById("void").style.display = "none";
  document.getElementById("text_output").style.display = "unset";
  document.getElementById("button_copy").style.display = "unset";
}

btn_Encriptar.addEventListener("click", Encriptar);

btn_Desencriptar.addEventListener("click", Desencriptar);

btn_copy.addEventListener("click", copy);


