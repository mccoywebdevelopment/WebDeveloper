window.onload=function(){
//var p1=document.querySelector("#p1");
var p1=document.getElementById("p1");
var p2=document.querySelector("#p2");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var input=document.querySelector("input");
var resetBtn=document.querySelector("#reset");
var limitDisplay=document.querySelector("#limitDisplay");
var p1score=0;
var p2score=0;
var limit=5;
var gameOver=false;

 
p1.addEventListener("click",function(){
	if(!gameOver){
		p1score=p1score+1;
		p1display.textContent=p1score;
	}
	if(p1score===limit)
	{
		p1display.className="winText";
		gameOver=true;
	}



});
p2.addEventListener("click",function(){
	if(!gameOver){
		p2score=p2score+1;
		p2display.textContent=p2score;
	}
	if(p2score===limit)
	{
		p2display.className="winText";
		gameOver=true;
	}

});

reset.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	limit=5;
	gameOver=false;
	limitDisplay.textContent=limit;
	p1display.textContent=p1score;
	p2display.textContent=p2score;
	p1display.classList.remove("winText");
	p2display.classList.remove("winText");


});

input.addEventListener("change",function(){
	limit=Number(input.value);
	limitDisplay.textContent=limit;
	gameOver=false;



});

}