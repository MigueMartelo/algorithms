let radio = prompt('Cual es el radio del circulo?');

function circleLong(radio) {
  const PI = 3.14;
  radio = Number(radio);
  const circleLong = 2 * PI * radio;

  alert(`La longitud del circulo es: ${circleLong} mts`);
}

circleLong(radio);
