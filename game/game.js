// alert("connected man!!!!");
var numSquares = 6;
var colors=generateRandomColors(numSquares);
 //note to give space after commas,ex- in rgb(1, 2, 3)


var square = document.querySelectorAll(".square");
// var pickedColor = colors[3];
  var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/* var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); */
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0;i<modeButtons.length;i++){
  modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
  this.classList.add("selected");
   this.textContent ==="Easy" ? numSquares=3 : numSquares = 6;
 /*  if(this.textContent === "Easy"){
    numSquares = 3;
  } else{
    numSquares = 6;
  } */
  reset();

  //figure out how many squares to show
  //pick new colors
  // pick a new pickedColor
  //update page to reflect changes
  });
}

function reset() {
   // generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  messageDisplay.textContent="";
  //change ColorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //change colors of square
  for(var i=0;i<square.length;i++){
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
    
  }
  h1.style.backgroundColor = "steelblue";
}


 /* easyBtn.addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for( var i=0;i< square.length;i++){
    if(colors[i])
    {
      square[i].style.backgroundColor = colors[i];
    }
    else{
      square[i].style.display = "none";
    }
    
      
  }
});
hardBtn.addEventListener("click",function(){
  //alert("hard button clicked")
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for( var i=0;i< square.length;i++){
    
    square[i].style.backgroundColor = colors[i];
    
    
      square[i].style.display = "block";
    
  }

}); */
resetButton.addEventListener("click", function(){
    
 reset();
})
colorDisplay.textContent = pickedColor;

for(var i=0; i<square.length; i++){
    // add initial colors to square
    square[i].style.backgroundColor = colors[i];
    //add click listeners to square
    square[i].addEventListener("click",function(){
     //   alert("clicked a square");
     //  grab color of clicked square
      var clickedColor = this.style.backgroundColor;
     // compare color to pickedColor
    
     if (clickedColor === pickedColor)
     {
         messageDisplay.textContent = "Correct!!";
         resetButton.textContent="Play Again?"
         changeColors(clickedColor);
         h1.style.backgroundColor = clickedColor;
     }
     else{
        // alert("Wrong!!");
        this.style.backgroundColor = "rgba(145, 177, 166, 0.608)";
        messageDisplay.textContent="Try Again!";                 // all span in tml given color white thru css in videos as black text is not visible in black backgr. but visible in my backgr.
     }
    });

}

function changeColors(color){
    // loop through all square
    for(var i=0;i<square.length;i++){
    //change each color to match given color
   square[i].style.backgroundColor = color;
    }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  // make an array
  var arr=[]
  //repeat nm times
  // add num random colors to an array
  for(var i=0;i<num;i++){
   //get Random color and push into arr
   arr.push( randomColor())

  }
  // return that array
  return arr;
}
function randomColor(){
  // pick  a "red" from 0 to 255
 var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  //"rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}