var express=require("express");
var app=express();
var bodyParser=require('body-parser');
var checkImage = require('image-check');
var fs=require("fs");

app.use(bodyParser.urlencoded({extended:true}));

//Variables======================================
var campSites=[
    {title:"Camp Pike",image:"https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Yolo",image:"https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Steph",image:"https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Pike",image:"https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Yolo",image:"https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Steph",image:"https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {title:"Camp Doe",image:"https://images.pexels.com/photos/111362/pexels-photo-111362.jpeg?auto=compress&cs=tinysrgb&h=350"}];

var defaultImg="http://www.piniswiss.com/wp-content/uploads/2013/05/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1" +
    "a654fc54840aac61a57a60903fef-300x199.png";
//===============================================


app.get("/",function (req,res) {
    res.render("landing.ejs");
});

app.get("/campSite",function (req,res) {
    res.render("campSite.ejs",{campSites:campSites,defaultImg:defaultImg});
});

app.get("/new",function (req,res) {
    res.render("new.ejs");
});

app.post("/campSite",function (req,res) {
    var newCampSite=req.body.newCampSite;
    var newCampSiteURL=req.body.newCampSiteURL;

    checkImage(newCampSiteURL).then((data) => {
        // access image attributes
    console.log("True");
    }).catch((err) => {
        // handle error
        console.log("False");
        console.log(newCampSiteURL);
    });

    campSites.push({title:newCampSite,image:newCampSiteURL});
    res.redirect("/campSite");
});
app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});