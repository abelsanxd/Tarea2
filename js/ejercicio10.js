let filas = prompt("Ingresa el número de filas:");
let columnas = prompt("Ingresa el número de columnas:");

if (!isNaN(filas) && !isNaN(columnas) && filas > 0 && columnas > 0) {
  filas = parseInt(filas);
  columnas = parseInt(columnas);

  let numeroActual = filas * columnas;

  for (let i = 1; i <= filas; i++) {
    let fila = "";
    for (let j = 1; j <= columnas; j++) {
      fila += numeroActual + "\t";
      numeroActual--;
    }
    console.log(fila);
  }
} else {
  alert("¡Error! Ingresa un número válido para filas y columnas.");
}
