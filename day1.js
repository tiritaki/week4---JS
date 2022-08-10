

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const result = document.getElementById("result")
const operator = document.getElementById("operator")

function sumUp (number1, number2) {
return Number(number1)+ Number(number2)
}
function minus (number1, number2) {
  return Number(number1)- Number(number2)
  }
function dev (number1, number2) {
    return Number(number1)/ Number(number2)
    }
function multi (number1, number2) {
    return Number(number1)* Number(number2)
      }

function calculate (operator){
switch(operator.value) {
  case "+":
    var sum = sumUp(number1.value, number2.value );
    result.value = sum.toString();
    break;
  case "-":
    var min = minus(number1.value, number2.value );
    result.value = min.toString();
    break;
  case "/":
    var div = dev(number1.value, number2.value );
    result.value = div.toString();
    break;
  case "*":
    var mult = multi(number1.value, number2.value );
    result.value = mult.toString();
    break;
  default:
    // code block
}
};

function myFunction() {
  let number;
  let person = prompt("Please enter your age:", "your age");
  if (person == null || person == "") {
    number = "User cancelled the prompt.";
  } else {
    number = "You are " + person + " years old";
  }
  document.getElementById("demo").innerHTML = number;
}
