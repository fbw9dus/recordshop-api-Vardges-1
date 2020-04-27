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
const bcrypt = require('bcrypt')

const {
  Schema
} = mongoose;
const Adresschema = require('./Addres')



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
  address: Adresschema
  }, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },

});


// const User = mongoose.model('User', UserSchema);


UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});


UserSchema.pre("save", async function(next)  {
  
  if(!this.isModified("password")) return next()
  this.password = await  bcrypt.hash(this.password, 10)
  next()
})

module.exports = mongoose.model("User", UserSchema);