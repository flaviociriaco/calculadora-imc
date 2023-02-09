function calculate() {
  const inputName = document.getElementById('name').value;  
  const inputHeigth = document.getElementById("height").value;
  const inputWeigth = document.getElementById("weight").value;
  const inputImc = (inputWeigth / (inputHeigth**2)).toFixed(0)
  const result = document.getElementById('result')
  const imc = inputImc

  

  result.innerHTML = imc
  
}



button.addEventListener('click', calculate)
