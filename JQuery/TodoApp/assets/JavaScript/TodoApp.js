window.onload=function(){
//Use on with ul for all potential upcoming events!
//Cross out item that was clicked:



$("input").keypress(function(e){
	var key=e.which;
	if(key===13)
	{
		var value=$(this).val();
		if(value!=="")
		{
			var temp=$("ul").append("<li class='notCompleted'><span class='fa fa-trash'></span>"+"		"+value+"</li>");
			(this).value="";
		}
	}
});




$("ul").on("click","li",function(){
	if($(this).hasClass("completed"))
	{
		$(this).toggleClass("notCompleted");
		$(this).removeClass("completed");
	}
	else{
		$(this).addClass("completed");
		$(this).removeClass("notCompleted");
	}
});

//Click on X to delete Todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		this.remove();
	});
	event.stopPropagation();
});



/* Steph's HW
function wordValue(str)
{
	var values=
	{
		letter:["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", 
		"m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"],
		score: [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]
	}
	//console.log(values.score.length);


	var totalScore=0;
	for(var i=0;i<str.length;++i)
	{
		for(var ix=0;ix<values.letter.length;++ix)
		{
			if(str.charAt(i)===values.letter[ix])
			{
				totalScore=totalScore+values.score[ix];
			}
		}
	}

	return totalScore;
}

console.log(wordValue("cooz"));

*/






















}