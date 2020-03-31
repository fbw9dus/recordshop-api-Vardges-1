// const mongoose = require("mongoose");
// const {
//   Schema
// } = mongoose;

// const UserSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// }, {
//   toObject: {
//     virtuals: true
//   },
//   toJSON: {
//     virtuals: true
//   }
// });

// UserSchema.virtual("fullName").get(function () {
//   return `${this.firstName} ${this.lastName}`;
// });

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect("mongodb://localhost:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const cityDaten = new Schema({
  city: {
      type: String,
      required: true
  },
  street:{
      type: String,
      required: true
  }, 
  nummer: {
      type: Number,
      required: true
  }

})



const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cityDaten: cityDaten
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },
 
});


const User = mongoose.model('User', UserSchema);


UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});


module.exports = mongoose.model("User", UserSchema);