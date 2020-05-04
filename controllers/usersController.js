var User = require('../models/User');
const {validationResult} = require('express-validator');
const createError = require("http-errors")
const encryption = require('../lib/validation/encryption')

exports.getUsers = async (req, res) => {
  // Schreib hier code um alle Kunden aus der users-Collection zu holen
  var user = await User.find()

  res.status(200).send(user);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu holen
  var user = await User.findById(id)
  res.status(200).send(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu löschen
  var user = await User.findByIdAndDelete(id)
  res.status(200).send(user);
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) throw new createError.NotFound();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};


// exports.addUser = async (req, res) => {
//   const data = req.body;
//   // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
//   var user = new User(data)
//   await user.save()
//   res.status(200).send(user)
// };

exports.addUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const user = req.body;
    // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
    await User.init()
    const newUser = new User(user)
    await newUser.save()
    res.status(200).send(newUser);
  } catch (error) {
    next(error)
  }
  
};

  

 



// login
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }).select('+password')
    const valid = encryption.compare(password, user.password)

    const token = user.generateAuthToken()
    await user.save()
    
    if(!valid) throw new createError.NotFound()

    res
      .status(200)
      .header("x-auth", token)
      .send(user)

  } catch (error) {
    next(error)
  }
  
}