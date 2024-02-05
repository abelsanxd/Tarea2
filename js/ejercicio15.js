let texto = prompt("Ingresa un texto:");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
  let caracterActual = texto[i].toLowerCase();
  if ("aeiou".includes(caracterActual)) {
    contadorVocales++;
  }
}

console.log("Número de vocales en el texto: " + contadorVocales);
