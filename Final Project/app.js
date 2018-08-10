var express=require("express");
var app=express();

//Variables======================================
var campSites=[
    {title:"Camp Pike",image:"https://cdn1.freshoffthegrid.com/wp-content/uploads/guide-to-free-campsites-in-the-us-and-canada.jpg"},
    {title:"Camp Yolo",image:"https://www.weekendnotes.com/im/006/03/best-free-camping-in-south-australiabest-free-camp.jpg"},
    {title:"Camp Steph",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAjkhsZYvkyu0PWBAdSxQm_8SFeieS6WljGqtHqlW-_UlKTLg9A"},
    {title:"Camp Doe",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww-oC_fV0vNa-cHvmImgHAtBiPYuXxU5ozmGQJM9q1TUQlZBnCA"}];
//===============================================


app.get("/",function (req,res) {
    res.send("Home page");
});

app.get("/landing",function (req,res) {
    res.render("landing.ejs",{campSites:campSites});
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
});