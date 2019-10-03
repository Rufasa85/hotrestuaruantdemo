var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    name:"joe",
    number:1
}];

var waitlist = [{
    name:"steve",
    number:5
}];

app.get('/',function(req,res){
    res.send('this will be tables page')
});

app.get('/add',function(req,res){
    res.send('this will be add page')
});

app.get('/api/tables',function(req,res){
    res.json(tables);
});

app.get('/api/waitlist',function(req,res){
    res.json(waitlist);
});

app.post('/api/tables',function(req,res){
   var newReservation = req.body;
   if(tables.length<5){
        tables.push(newReservation);
   } else {
       waitlist.push(newReservation);
   }
   res.json(newReservation);
})

app.listen(3000,function(){
    console.log('server running on port 3000')
});