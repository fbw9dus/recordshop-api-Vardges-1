var mongoose = require('mongoose')

var trackSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
    artist: {
        type: String,
       required: true
     } 
})

// Dokument-Vorlage aus Schema (Model)
var trackModel = mongoose.model('Track', trackSchema)

module.exports = trackModel