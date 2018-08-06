var http=require('http');
var express=require('express');
var request=require('request');
const app=express();

var defaultTitle="Alien";


app.use(express.static(__dirname + '/public'));

app.get('/',function (req,res) {
    res.render('home.ejs',{results:defaultTitle});
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});
//slk