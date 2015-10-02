var mongoose = require('mongoose'),
    Speakers = mongoose.model('Speakers');

//GET-Return all speakers in the DB

exports.findAllSpeakers= function(req,res){

    Speakers.find(function(err,speaker){
        if(err)
            console.log("no se han encontrado speakers");
        else
             res.status(200).jsonp(speaker);
    });
}

exports.addSpeaker= function(req, res){
    console.log('POST');
    console.log(req.body);
    var speaker= new Speakers({
        nombre: req.body.nombre,
        charla: req.body.charla,
        tiempo: req.body.tiempo
    });
    speaker.save(function(err, speaker){
        if(err) 
            res.send(500, err.message);
        else
            res.status(200).jsonp(speaker);
    });
}
exports.updateSpeaker=function(req,res){
    console.log('PUT');
    console.log(req.param.id);
    
    Speakers.findById(req.params.id, function(err, speaker){
        speaker.nombre= req.body.nombre,
        speaker.charla= req.body.charla,
        speaker.tiempo= req.body.tiempo
        
        speaker.save(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200).jsonp(speaker);
        });
    });
}
exports .deleteSpeaker=function(req, res){
    Speakers.findById(req.params.id, function(err, speaker){
        
        speaker.remove(function(err){
            if(err)
                res.send(500,err.message);
            else
                res.status(200);
        });
    });
}

