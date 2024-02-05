let texto = prompt("Ingresa una cadena de texto:");
let textoReverso = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoReverso += texto[i];
}

console.log("Texto al revés: " + textoReverso);
