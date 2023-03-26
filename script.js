// variable dom
let weightCalcDOM = document.querySelector("#weight");
let heightCalcDOM = document.querySelector("#height");
let calcBtnDOM = document.querySelector("#calculate-btn");
let resultBmiDOM = document.querySelector("#result-bmi");
let statementBmiDOM = document.querySelector("#statement-bmi");
let BMI, yourBmi, weightCalc, heightCalc;

calcBtnDOM.addEventListener("click", findBMI);

function findBMI(event) {
  event.preventDefault();
  // variable value
  weightCalc = weightCalcDOM.value;
  heightCalc = heightCalcDOM.value;
  BMI = weightCalc / heightCalc / heightCalc;

  // psuedocode
  if (BMI < 18.0) {
    yourBmi = "Underweight : You need to eat more or consult a doctor";
  } else if (BMI >= 18.0 && BMI <= 24.0) {
    yourBmi = "Ideal : Good job for taking care of your health";
  } else if (BMI > 24.0 && BMI < 30.0)
    yourBmi = "Overweight : You need to exercise";
  else {
    yourBmi = "Obese : You need to exercise and consult a doctor";
  }

  // insert variable value into DOM innerText
  resultBmiDOM.innerText = BMI.toFixed();
  statementBmiDOM.innerText = yourBmi;
}
