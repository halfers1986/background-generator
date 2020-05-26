var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var elem = document.querySelector("body");
var initValue = window.getComputedStyle(elem, null).getPropertyValue("background");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandoms() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandoms);

setRandoms();


//||Original attempt to have the color information display at page load.||
//||It works, but with a lot of uneccessary fluff (additional unimportant settings shown.)||
//||In the end was simpler to have a random gradient selected on page load and use Andrei's code.||

// var elem = document.querySelector("body");
// var initValue = window.getComputedStyle(elem, null).getPropertyValue("background");
// document.querySelector("h3").innerHTML = initValue;



