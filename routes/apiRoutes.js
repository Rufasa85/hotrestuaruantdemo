var express = require('express');
var router = express.Router();

var tables = [{
    name:"joe",
    number:1
}];

var waitlist = [{
    name:"steve",
    number:5
}];

router.get('/tables',function(req,res){
    res.json(tables);
});

//gets all waitlist 
router.get('/waitlist',function(req,res){
    res.json(waitlist);
});

//creates new reservation data based on how many people have tables 
router.post('/tables',function(req,res){
   var newReservation = req.body;
   if(tables.length<5){
        tables.push(newReservation);
   } else {
       waitlist.push(newReservation);
   }
   res.json(newReservation);
})

module.exports=router;