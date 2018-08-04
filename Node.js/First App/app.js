var http=require('http');
var express=require('express');
const app=express();
var enter=0;
var data=1;

app.use(express.static("public"));
app.get('/',function (req,res) {
  res.render('home.ejs',{data:data});
  enter++;
  console.log("There has been "+enter+" users on your site.");
});

app.get('/posts',function (req,res) {
    var posts=[
        {title:"A dog's life",author:"Dogo"},
        {title:"A dog's life",author:"Dogo"},
        {title:"A dog's life",author:"Dogo"}

    ];
//sdfjdfsdf
    res.render('posts.ejs',{posts:posts});
});

app.get('/search/:thing',function (req,res) {
    var thing=req.params.thing;
    res.render('search.ejs',{thing:thing});
});

app.get('/repeat/:rand',function (req,res) {
    res.send("You entered the repeating site.");
});

app.listen(2000,function() {
    console.log("Listening on Port:"+2000);
})