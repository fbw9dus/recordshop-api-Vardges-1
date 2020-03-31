var User = require('../models/User')
const {validationResult} = require('express-validator')


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
  var user = await User.deleteMany(id)
  res.status(200).send(user);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
   // Daten aus Request-Body speichern
  const dt = req.body;
  // Document mit dieser id mit Daten aus req.body in Collection aktualisieren
  var user = await Animal.findByIdAndUpdate(id, dt, {new: true})
  res.status(200).send(user);
};

// exports.addUser = async (req, res) => {
//   const data = req.body;
//   // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
//   var user = new User(data)
//   await user.save()
//   res.status(200).send(user)
// };

exports.addUser  = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const data = req.body;
  const user     = new User(data);
  await user.save();

  res.status(200).send(user);
};