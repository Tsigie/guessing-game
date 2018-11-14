var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 225, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll("squere");
var pickedColor = pickColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squeres.length; i++) {
  squeres[i].style.background = colors[i];

  squres[i].addEventListner("click", function() {
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "correct!";
    } else {
      this.background = "#232323";
      messageDisplay.textContent = "Let's Try Again";
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  math.random()
}