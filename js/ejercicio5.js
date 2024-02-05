function calcularLetraDNI() {
  let inputDNI = document.getElementById("dniInput").value;

  if (!isNaN(inputDNI) && inputDNI >= 0 && inputDNI <= 99999999) {
    let numeroDNI = parseInt(inputDNI);
    let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    let indiceLetra = numeroDNI % 23;
    let letraDNI = letrasDNI.charAt(indiceLetra);

    alert("La letra del DNI " + numeroDNI + " es: " + letraDNI);
  } else {
    alert("¡Error! Ingresa un número de DNI válido.");
  }
}
