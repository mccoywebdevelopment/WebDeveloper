var express=require("express");
var app=express();

app.get("/",function (req,res) {
    res.send("Home page");
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});