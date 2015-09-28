var mongoose= require('mongoose'),
    Schema= mongoose.Schema;

var speaker = new Schema({    
    "nombre": String,
    "charla": String,
    "tiempo": Number
});

module.exports= mongoose.model('Speakers', speaker);