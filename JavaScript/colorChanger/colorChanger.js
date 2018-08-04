var button = document.querySelector("button");
var body= document.querySelector("body");

button.addEventListener("click",myFunction);
function myFunction(){
	var attribute=body.style.backgroundColor;
	if(attribute=="purple")
	{
		body.style.backgroundColor="white";
	}
	else
	{
		body.style.backgroundColor="purple";
	}

	
	

}