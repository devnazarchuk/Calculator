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
let button_img = document.getElementById("button_img");

button_img.onclick = function imageChange(){
  let header_img = document.getElementById("header_img");
  let mySrc = header_img.getAttribute("src");
  if (mySrc === "/img/banner.png") {
    header_img.setAttribute("src", "/img/banner2.png");
  } else {
    header_img.setAttribute("src", "/img/banner.png");
  }
};
// let userName = document.getElementById("userName");
// userName.onclick = function setUserName() {
//   let myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = "Edge is cool, " + myName;
// }