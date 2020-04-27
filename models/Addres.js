const { Schema } = require('mongoose')

module.exports = new Schema({
    city: {
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    }
  
})