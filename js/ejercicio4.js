let sumaTotal = 0;

while (true) {
  let Puerta = prompt("Ingresa un número:");

  if (Puerta === null) {
    alert("Suma total de los números introducidos: " + sumaTotal);
    break;
  }

  let numero = parseFloat(Puerta);

  if (!isNaN(numero)) {
    sumaTotal += numero;
  } else {
    alert("¡Error! Ingresa un número válido.");
  }
}
