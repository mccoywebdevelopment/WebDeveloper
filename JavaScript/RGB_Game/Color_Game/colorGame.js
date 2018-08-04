window.onload=function(){
//======================================================================================
var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

manipulateColors(colors,"rand");
var squares=document.querySelectorAll(".square");
var pickedColor=randomColor(colors);
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent=pickedColor;
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easyBtn");
var hardButton=document.querySelector("#hardBtn");

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	manipulateColors(colors,"rand");
	pickedColor=randomColor(colors);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;++i)
	{
		squares[i].style.backgroundColor=colors[i];
	}
});

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	manipulateColors(colors,"easy");
	pickedColor=randomColor(colors);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;++i)
	{
		squares[i].style.backgroundColor=colors[i];
	}

}); 

resetButton.addEventListener("click",function(){
	if(hardButton.classList.contains("selected"))
	{
		manipulateColors(colors,"rand");
	}
	else{
		manipulateColors(colors,"easy");
	}
	pickedColor=randomColor(colors);
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;++i)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	var h1=document.querySelector("h1");
	h1.style.backgroundColor="steelblue";
	this.textContent="New Color";
});

for(var i=0;i<squares.length;++i)
{
	//add initials colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listener to squares
	squares[i].addEventListener("click",function(){

		if(this.style.backgroundColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changeColor(pickedColor);
			resetButton.textContent="Play Again?"

		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}

	});
}


function changeColor(desiredColor){
	for(var i=0;i<colors.length;++i)
	{
		squares[i].style.backgroundColor=desiredColor;
	}
	var getH1=document.querySelector("h1");
	getH1.style.backgroundColor=desiredColor;
}
function randomColor(array){
	var randNum=Math.floor(Math.random()*array.length);
	return array[randNum];

}
function manipulateColors(array,variation)
{
	var red,green,blue;
	if(variation==="rand")
	{
		for(var i=0;i<array.length;++i)
		{
		 	red=Math.floor(Math.random()*256);	
		 	green=Math.floor(Math.random()*256);
		 	blue=Math.floor(Math.random()*256);
			array[i]="rgb("+red+","+" "+green+","+" "+blue+")";
		}
	}
	else if(variation==="easy")
	{
		array[0]="rgb(255, 0, 0)";
		array[1]="rgb(255, 255, 0)";
		array[2]="rgb(0, 255, 0)";
		array[3]="rgb(0, 255, 255)";
		array[4]="rgb(0, 0, 255)";
		array[5]="rgb(255, 0, 255)";
	}
}

//======================================================================================
}
