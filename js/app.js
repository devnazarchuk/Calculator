"use strict";
let navLinks = document.getElementById("navLinks");
let faBars = document.getElementById("faBars");
let faTimes = document.getElementById("faTimes");
function showMenu() {
  navLinks.style.right = "0";
  faBars.style.display = "none";
  faTimes.style.display = "block";
}
function hideMenu() {
  navLinks.style.right = "-40vw";
  faTimes.style.display = "none";
  faBars.style.display = "block";
}
/*--------------Me learn code--------------------*/
/*calculator */
// alert("Welcome to the calculator");
// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");
// let operator = prompt("Enter operator");
// if (operator == "+"){
//   alert(`Result is ${Number(firstNumber)+Number(secondNumber)}`)
// }
// else if(operator =="-"){
//   alert(`Result is ${Number(firstNumber)-Number(secondNumber)}`)
// }
// else if(operator =="*"){
//   alert(`Result is ${Number(firstNumber)*Number(secondNumber)}`)
// }
// else if(operator =="/"){
//   alert(`Result is ${Number(firstNumber)/Number(secondNumber)}`)
// }
// else{
//   alert("Something wrong")
// };

//Get elements
let calculator_1 = document.getElementById("calculator_1").textContent;
calculator_1= Number(calculator_1);
let calculator_2 = document.getElementById("calculator_2").textContent;
calculator_2= Number(calculator_2);
let calculator_3 = document.getElementById("calculator_3").textContent;
calculator_3= Number(calculator_3)
let calculator_4 = document.getElementById("calculator_4").textContent;
calculator_4= Number(calculator_4);
let calculator_5 = document.getElementById("calculator_5").textContent;
calculator_5= Number(calculator_5);
let calculator_6 = document.getElementById("calculator_6").textContent;
calculator_6= Number(calculator_6);
let calculator_7 = document.getElementById("calculator_7").textContent;
calculator_7= Number(calculator_7);
let calculator_8 = document.getElementById("calculator_8").textContent;
calculator_8= Number(calculator_8);
let calculator_9 = document.getElementById("calculator_9").textContent;
calculator_9= Number(calculator_9);
let calculator_0 = document.getElementById("calculator_0").textContent;
calculator_0= Number(calculator_0);
let calculator_plus = document.getElementById("calculator_plus").textContent;
//
let calculator_minus = document.getElementById("calculator_minus").textContent;
//
let calculator_devide = document.getElementById("calculator_devide").textContent;
//
let calculator_multiply = document.getElementById("calculator_multiply").textContent;
//
let calculator_submit = document.getElementById("calculator_submit").textContent;
//
let calculator_result= document.getElementById("calculator_result").textContent;
//starting coding
let firstNumber_str='',secondNumber_str='',operator='';
const digits = ['1','2','3','4','5','6','7','8','9','0','.'];
const actionts = ['+','-','/','*'];
function enterFirstNumber(){

}
//last func
function calculation(firstNumber,operator,secondNumber){
  firstNumber=Number(firstNumber_str);
  secondNumber=Number(secondNumber_str);
  if (operator == "+"){
    calculator_result=(`Result is ${Number(firstNumber)+Number(secondNumber)}`)
  }
  else if(operator =="-"){
    calculator_result=(`Result is ${Number(firstNumber)-Number(secondNumber)}`)
  }
  else if(operator =="*"){
    calculator_result=(`Result is ${Number(firstNumber)*Number(secondNumber)}`)
  }
  else if(operator =="/"){
    calculator_result=(`Result is ${Number(firstNumber)/Number(secondNumber)}`)
  }
  else{
    calculator_result=("Something wrong")
  };
}