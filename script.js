var css = document.getElementById("current");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".rand");
var body = document.getElementById("gradient");
var div = document.querySelector(".colours");
var direction = "right";

color1.addEventListener("input", updateBackground);

color2.addEventListener("input", updateBackground);

random.addEventListener("click", function() {
    color1.setAttribute("value", "#" + Math.floor(Math.random() * 16777216).toString(16));
    color2.setAttribute("value", "#" + Math.floor(Math.random() * 16777216).toString(16));
    updateBackground();
});

function changeDirection(givenDirection) {
    if (givenDirection === 1) {
        direction = "left";
        div.style.flexDirection = "row-reverse";
    } else if (givenDirection === 2) {
        direction = "right";
        div.style.flexDirection = "row";
    } else if (givenDirection === 3) {
        direction = "top";
        div.style.flexDirection = "column-reverse";
    } else {
        direction = "bottom";
        div.style.flexDirection = "column";
    }
    updateBackground();
}



function updateBackground() {
    body.style.background = "linear-gradient(to " + direction + ", " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}