let cadenatext = "";

while (true) {
  let Puerta = prompt("Ingresa una cadena de texto:");

  if (Puerta === null) {
    break;
  }

  cadenatext += Puerta + "-";
}

confirm("Cadenas de textos: " + cadenatext.slice(0, -1));
