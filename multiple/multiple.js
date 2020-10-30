let num1 = prompt('Ingresa un número');
let num2 = prompt('Ingresa otro número');

function multiples(num1, num2) {
  if (num1 % num2 === 0) {
    alert(`${num1} es múltiplo de ${num2}`);
  } else {
    alert(`${num1} no es múltiplo de ${num2}`);
  }
}

multiples(num1, num2);
