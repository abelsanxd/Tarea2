let puerta = prompt("Ingresa un número (no mayor de 50):");

// Validar la entrada del usuario
if (puerta !== null && !isNaN(puerta) && puerta >= 1 && puerta <= 50) {
  let numeroMaximo = parseInt(puerta);

  for (let i = 1; i <= numeroMaximo; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else {
  alert("¡Error! Ingresa un número válido (no mayor de 50).");
}
