let puerta = prompt("Ingresa un número (no mayor de 50):");

if (puerta !== null && !isNaN(puerta) && puerta >= 1 && puerta <= 50) {
  let numeroMaximo = parseInt(puerta);

  for (let i = numeroMaximo; i >= 1; i--) {
    let linea = "";
    for (let j = i; j <= numeroMaximo; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else {
  alert("¡Error! Ingresa un número válido (no mayor de 50).");
}
