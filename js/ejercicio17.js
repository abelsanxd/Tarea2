let texto = prompt("Ingresa un texto:");
let posicionPrimeraVocal = -1;

for (let i = 0; i < texto.length; i++) {
  let caracterActual = texto[i].toLowerCase(); // Convertir a minúsculas para comparación
  if ("aeiou".includes(caracterActual)) {
    posicionPrimeraVocal = i + 1; // Sumar 1 para obtener la posición correcta
    break; // Salir del bucle una vez encontrada la primera vocal
  }
}

if (posicionPrimeraVocal !== -1) {
  console.log(
    "La vocal '" +
      texto[posicionPrimeraVocal - 1] +
      "' está en la posición " +
      posicionPrimeraVocal
  );
} else {
  console.log("No se encontraron vocales en el texto.");
}
