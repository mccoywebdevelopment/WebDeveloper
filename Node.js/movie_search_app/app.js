var http=require('http');
var express=require('express');
var request=require('request');
var bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});

var defaultTitle="Alien";
var userSearch=defaultTitle;



app.post("/searchMovie",function (req,res) {
    var userSearch=req.body.user_title;

    console.log(userSearch);
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

