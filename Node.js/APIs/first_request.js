var request=require('request');
request('http://www.google.con',function (error,res,body) {
    if(!error && res.statusCode==200){
        console.log(body);
    }
});