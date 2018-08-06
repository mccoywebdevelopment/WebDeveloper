var http=require('http');
var express=require('express');
var request=require('request');
const app=express();
app.use(express.static(__dirname + '/public'));

var defaultTitle="Alien";
var userSearch=defaultTitle;



app.post("/searchMovie",function (req,res) {
    console.log("http://www.omdbapi.com/?s="+userSearch+"&apikey=thewdb");
    request("http://www.omdbapi.com/?s="+userSearch+"&apikey=thewdb",function (error,res,body) {
    if(!error && res.statusCode==200){
        var data=JSON.parse(body);
        console.log(data);
    }
    //res.render('home.ejs',{});
    });
});


app.get('/',function (req,res) {
    res.render('home.ejs',{results:defaultTitle});
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});
//slksfsd