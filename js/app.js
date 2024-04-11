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

// let userName = document.getElementById("userName");
// userName.onclick = function setUserName() {
//   let myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = "Edge is cool, " + myName;
// }