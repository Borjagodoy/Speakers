var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var models = require('./speakers')(app, mongoose); 
var speakersCTRL = require('./controllers/speakersController');
var app= express();

mongoose.connect('mongodb://localhost/speakers', function(err) {  
    // Comprobar errores siempre
        if(!err) 
            console.log('BD Connect');
    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(extended:true));
app.use(methodOverride());


app.route('/speakers')
    .get(speakersCTRL.addSpeaker)
    .post(speakersCTRL.findAllSpeakers);
    

app.listen(3000);