var express = require('express');
var mongoose = require('mongoose');

var bodyParser= require('body-parser');
var methodOverride= require('method-override');

var models = require('./speakers'); 

var speakersCTRL = require('./controllers/speakersController');
var app= express();

mongoose.connect('mongodb://localhost/speakers', function(err) {  
    
        if(!err) 
            console.log('BD Connect');    
});

app.use(express.static(__dirname + '/app')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());


app.route('/speakers')
    .post(speakersCTRL.addSpeaker)
    .get(speakersCTRL.findAllSpeakers);

app.route('/speakers/:id')
    .put(speakersCTRL.updateSpeaker)
    .delete(speakersCTRL.deleteSpeaker);
    

app.listen(3000);