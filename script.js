const calcular = document.getElementById("calcular");

function calculate() {
  const inputName = document.getElementById("name").value;
  const inputHeigth = document.getElementById("height").value;
  const inputWeigth = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (inputName !== "" && inputHeigth !== "" && inputWeigth !== "") {
    const valueImc = parseInt(inputWeigth / inputHeigth ** 2).toFixed(0);
    let condition = "";

    if (valueImc < 18.5) {
      condition = "abaixo do peso";
    } else if (valueImc < 25) {
      condition = "com peso normal";
    } else if (valueImc < 29.9) {
      condition = "com sobrepeso";
    } else if (valueImc < 34.9) {
      condition = "com obesidade grau I";
    } else if (valueImc < 40) {
      condition = "com obesidade grau II";
    } else if (valueImc > 40) {
      condition = "com obesidade grau III";
    }

    result.textContent = `${inputName} seu IMC é ${valueImc} e você está ${condition}`;
  } else {
    result.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", calculate);

function reset() {
  const name = document.querySelector("#name");
  name.value = '';

  const height = document.querySelector("#height");
  height.value = '';

  const weight = document.querySelector("#weight");
  weight.value = '';

  const result = document.querySelector("#result");
  result.textContent = '';
}
