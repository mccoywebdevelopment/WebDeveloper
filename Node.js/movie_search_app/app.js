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

var userSearch="Alien";
var data=[];


app.post("/searchMovie",function (req,res) {
    userSearch=req.body.userTitle;
    console.log("http://www.omdbapi.com/?s="+userSearch+"&apikey=thewdb");
    res.redirect("/");

});


app.get('/',function (req,response) {
    request("http://www.omdbapi.com/?s="+userSearch+"&apikey=thewdb",function (error,res,body) {
        if(!error && res.statusCode==200){
            data=JSON.parse(body);
            console.log(data["Search"][0]);
            response.render('home.ejs',{data:data});

        }
        else{
            console.log("error");
            response.send("ERROR 200")

        }
    });
});

//ldsdsssss