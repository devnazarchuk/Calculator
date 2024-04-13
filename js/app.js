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
const display = document.getElementById("display");

function appendToDisplay(input){
  display.value +=input;
}
function clearDisplay(){
  display.value="";
}
function calculate(){
  try{
  display.value = eval(display.value);
  }
  catch(error){
    display.value="Error"
  }
}