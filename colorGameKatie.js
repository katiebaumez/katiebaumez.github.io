// alert("connected")
//command d selects the next instance of a highlighted item

var colors= genRandomColors(6);
//selects the color we're looking for 
var pickedColor = pickColor();
var numSquares = 6;

//Selecting elements from the DOM
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var correctStatus = document.querySelector("#correctStatus");
var header = document.getElementById("stripe");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = genRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
   
    
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = genRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = genRandomColors(numSquares);
    //pick a new random color from array
    pickedColor=pickColor();
    //change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor.toUpperCase();
    //change colors of squares 
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    //reset header color
    header.style.backgroundColor = "white";
    correctStatus.textContent = "";
    this.textContent = "New Colors";
})
colorDisplay.textContent = pickedColor.toUpperCase();

for(var i=0; i<squares.length; i++){
    //add initial colors to squares 
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares 
    squares[i].addEventListener("click", function(){
        //grab color of clicked
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor){
            correctStatus.textContent="Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            header.style.backgroundColor = clickedColor;
        } else{
            this.style.backgroundColor="#007399";
            correctStatus.innerHTML="Try Again!";
        };
        // alert(this.style.backgroundColor);
    })
   
};

function changeColors(color){
    //loop through all squares
    //change each color to pickedColor
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    };
};

//generates number 0-5,  picks it out of colors array, returns that color
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
};

//generates number 0-255
function random255(){
    return Math.floor(Math.random() * 256)
};
//generate a random RGB color
function randomRGB(num){
    return "rgb(" + random255() + ", " + random255() + ", " + random255() + ")"
};
//returns an array filled with num RGB colors 
function genRandomColors(num){
    var arr=[]
    for (var i=0; i<num; i++){
        arr.push(randomRGB());
    }
    return arr;
}



