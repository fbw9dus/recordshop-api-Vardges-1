const mongoose = require('mongoose')
const { Schema } = require('mongoose')

mongoose.connect("mongodb://localhost:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});




const CitySchema = new Schema({
    city: {
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    }, 
    address: {
        type: Number,
        required: true
    }

})

const City = mongoose.model('City', CitySchema);

(async() => {
    const citysachen = await City.create({
        city: 'Gothem', 
        street: "Alter Jockerstrasse",
        address:  11 
        
    })
    
    const collectionData = await City.find()
    console.log(collectionData)

})()
