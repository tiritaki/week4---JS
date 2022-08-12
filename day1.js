

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
function multiply (number1, number2) {
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
  default:
    var mult = multiply(number1.value, number2.value );
    result.value = mult.toString();
    break;
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

const cars = ["Saab", "Volvo", "BMW"];
for ( i in cars) {
  console.log(cars[i])
  let carname=cars[i]
  if ("Volvo" == carname) {
    console.log( `Welcome ${carname}`)}
  else {console.log("Sorry this car not in list");}
  }

  let containers = document.getElementsByClassName('dom')[2];
  console.log(containers)

  let paragr = document.getElementsByTagName("p")[3].innerText;
  console.log(typeof(Number(paragr)))

  document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "green";
});
    
document.getElementById("myID").addEventListener("mouseout", function() {
    document.getElementById("myID").style.backgroundColor = "red";
});



