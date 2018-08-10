var express=require("express");
var app=express();

app.get("/",function (req,res) {
    res.send("Home page");
});

app.get("/landing",function (req,res) {
    res.render("landing.ejs");
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});