//DATO DE ENTRADA

const numberValid = () => {
  let number = prompt("Ingrese un número entre 1 y 20");

  while (number < 1 || number > 20) {
    number = prompt(
      "Número fuera de rango. Porfavor ingrese un número dentro del rango"
    );
  }
  return number;
};

let calculation = numberValid();

//CALCULO MULTIPLICACION
for (i = 1; i <= calculation; i++) {
  let multiplication = i * calculation;
  console.log(`${i} * ${calculation} = ${multiplication}`);
}

//CALCULO FACTORIAL
for (i = 1; i <= calculation; i++) {
  let = factoring = 1;
  for (let j = 1; j <= i; j++) {
    factoring = factoring * j;
  }
  console.log(`Factorial de ${i} es ${factoring}`);
}
