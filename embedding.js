const mongoose = require('mongoose')
const { Schema } = require('mongoose')

mongoose.connect("mongodb://localhost:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


const nutritionFacts = new Schema({
   calories: {
       type: Number,
       required: true
   },
   carbs:{
       type: Number,
       required: true
   },
   protein: {
       type: Number,
       required: true
   },
   fat:{
       type: Number,
       required: true
   }

})

const BreadSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    nutritionFacts: nutritionFacts
})

const Bread = mongoose.model('Bread', BreadSchema);

(async() => {
    const bauernbrot = await Bread.create({
        productName: 'Bauerbrot', 
        weight: 1000,
        category: 'Sauerteigbrot' ,
        nutritionFacts: {
            calories: 160,
            carbs: 45,
            protein: 10,
            fat: 1
        }
    })
    
    const collectionData = await Bread.find()
    console.log(collectionData)

})()
