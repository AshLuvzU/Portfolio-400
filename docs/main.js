// Ashton Maloney JS file
window.addEventListener("DOMContentLoaded", init, false);

function init() {
  alert("Hi there! Looks like the page loaded! Yay!");
  var buttons = document.getElementsByTagName("button");
  buttons[0].addEventListener("click", changeColor, false);
  buttons[1].addEventListener("click", newFunction, false);
}

function changeColor() {
  var colorMe1 = document.getElementById("colorToggle");
  {
    colorMe1.style.backgroundColor = "skyblue";
  }
}
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", 100);
svg.setAttribute("viewBox", "0 0 100 100");
svg.style.display = "block";

const circle = createElementNS(svgNS, "circle");
circle.setAttribute("cx", 50);
circle.setAttribute("cy", 50);
circle.setAttribute("r", 50);
svg.appendChild(circle);
