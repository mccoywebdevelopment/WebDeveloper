var movieDB=[
{
	title: "Interstellar",
	rating: 5,
	watched: true
},
{
	title:"Inception",
	rating:4.9,
	watched: true
},
{
	title:"Avenger 2",
	rating: 3,
	watched: true
},
{
	title:"Star Wars: The Last Jedi",
	rating: 0,
	watched: false
}]

function outPutDB(){

	for(var i=0;i<movieDB.length;++i)
	{
		if(movieDB[i].watched===true)
		{
			console.log("You have seen \""+movieDB[i].title+"\" - "+movieDB[i].rating+" stars.");
		}
		else{

			console.log("You have not seen \""+movieDB[i].title+"\" - "+movieDB[i].rating+" stars.");
		}
	}
}
//============================This (instance of)==============================================================
 
 var comments={
 	data: ["HI","YO","Be","kay"]
 }

 comments.print=function(){
 	this.data.forEach(function(a){
 		console.log(a);
 	});
 }