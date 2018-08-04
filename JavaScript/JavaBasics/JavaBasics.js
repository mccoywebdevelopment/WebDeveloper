
var name=prompt("What's your name?");
var lastName=prompt("What's your last name?");
var number=prompt("When were you born "+name+" "+lastName+"?");
alert(name+" "+lastName+" was born on "+number);




var age=prompt("Enter how old you are in years.");
var days=365*age;
alert("You lived for about: "+days+" days.");




var num=-10;
while(num<=19)
{
	console.log(num);
	num=num+1;
}
num=10;
console.log("===========================================");
while(num<=40)
{
	console.log(num);
	num=num+2;
}
console.log("===========================================");
num=333
while(num>=300)
{
	console.log(num);
	num=num-2;
}
console.log("===========================================");
num=5;
while(num<=50)
{
	if(num%5==0 && num%3==0 )
	{
		console.log(num);
	}
	num=num+1;
}




for(var num=-10;num<=19;++num)
{
	console.log(num);
}
console.log("===========================================");
for(var num=10;num<=40;num=num+2)
{
	console.log(num);
}
console.log("===========================================");
for(var num=333;num>=300;num=num-2)
{
	console.log(num);
}
console.log("===========================================");
for(var num=5;num<=50;++num)
{
	if(num%5==0 && num%3==0 )
	{
		console.log(num);
	}
}




function isEven(x)
{
	if(x % 2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function factorial(x)
{
	var fact=0;
	if(x==1)
	{
		return fact+1;
	}
	return fact=x*factorial(x-1);
}
function kababToSnake(string)
{
	var newString="";
	for(var i=0;i<string.length;i=i+1)
	{
		if(string.charAt(i)=="-")
		{
			newString+="_";
		}
		else{
			newString+=string.charAt(i);
		}
	}
	return newString;
}