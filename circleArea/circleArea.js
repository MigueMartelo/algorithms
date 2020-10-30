let radio = prompt('Cual es el radio del circulo?');

function circleArea(radio) {
  const PI = 3.14;
  radio = Number(radio);
  const areaCircle = PI * Math.pow(radio, 2);

  alert(`El area del circulo es: ${areaCircle} mts2`);
}

circleArea(radio);
