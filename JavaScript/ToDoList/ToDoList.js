
var list=[];
while(command!=="quit")
{
	var command=prompt("What would you like to do?");
	if(command==="new")
	{
		var item=prompt("Enter item.");
		list.push(item);
	}
	else if(command==="list")
	{
		list.forEach(function(list){
			console.log("=================");
			console.log(list);
			console.log("=================");
		});
	}

		
}

