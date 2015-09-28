var mongoose = require('mongoose'),
    Speakers = mongoose.model('Speakers');

//GET-Return all speakers in the DB

exports.findAllSpeakers= function(req,res){

    Speakers.find(function(err,speaker){
        if(err)
            console.log("no se han encontrado speakers");
        else
            res.status(200).send(speaker);
    });
}

exports.addSpeaker= function(req, res){
    var speaker= new Speakers({
        nombre: req.body.nombre,
        charla: req.body.charla,
        tiempo: req.body.tiempo
    });
    speaker.save(function(err, speaker){
        if(err) 
            res.send(500, err.message);
        else
            res.status(200).send(speaker);
    });
}