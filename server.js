var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('this will be tables page')
});

app.get('/add',function(req,res){
    res.send('this will be add page')
});

app.get('/api/tables',function(req,res){
    res.send('this will send table data')
});

app.get('/api/waitlist',function(req,res){
    res.send('this will send waitlist data')
});

app.post('/api/tables',function(req,res){
    res.send("this is the post route")
})

app.listen(3000,function(){
    console.log('server running on port 3000')
});