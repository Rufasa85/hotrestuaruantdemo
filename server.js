// initializing express
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create arrays to hold data


//html routes, will sendback the homepage
var htmlRoutes = require('./routes/htmlRoutes');
app.use(htmlRoutes);

var apiRoutes = require('./routes/apiRoutes');
app.use('/api',apiRoutes);

//data routes, get all tables



//set up app to listen for request
app.listen(PORT,function(){
    console.log('server running on port ' + PORT)
});