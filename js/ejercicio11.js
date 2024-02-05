let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ingresa un nombre:");
  let edad = parseInt(prompt("Ingresa la edad de " + nombre + ":"));

  nombres.push(nombre);
  edades.push(edad);
}

let indiceMayor = edades.indexOf(Math.max(...edades));
let nombreMayor = nombres[indiceMayor];

alert("El nombre del mayor es: " + nombreMayor);
