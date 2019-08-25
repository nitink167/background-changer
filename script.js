var css = document.querySelector("h3");
var color1 = document.querySelector(".class1");
var color2 = document.querySelector(".class2");
var  body = document.querySelector("body");
var dropdowntoggle = document.querySelector(".dropdown-toggle")
var direction = document.querySelector("#direction");

function afterGradient() {
    css.innerHTML = "background-color: linear-gradient( " + direction.value + " , " + color1.value + " , " + color2.value + ")";
    // IF WANT TO CHANGE COLOR OF DROPDOWN TOGGLE, UNCOMMENT THIS
    // dropdowntoggle[0].style.background = "linear-gradient( " + direction.value + " , " + color1.value + " , " + color2.value + ")";
}

function backgroundcolor() {
    body.style.background = "linear-gradient( " + direction.value + " , " + color1.value + " , " + color2.value + ")";
    afterGradient()
}

direction.addEventListener("change", backgroundcolor);

color1.addEventListener("input", backgroundcolor);

color2.addEventListener("input", backgroundcolor);