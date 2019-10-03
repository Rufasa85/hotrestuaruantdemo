// initializing express
var express = require('express');
var app = express();



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
app.listen(3000,function(){
    console.log('server running on port 3000')
});