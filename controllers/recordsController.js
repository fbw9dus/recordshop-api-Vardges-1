const Record   = require('../models/Record');



exports.getRecords = async (req, res, next) => {
  // Schreib hier code um alle records aus der records-Collection zu holen
  const records = await Record.find()

  res.status(200).send(records);
};

exports.getRecord = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um das record mit der id aus params aus der records-Collection zu holen
  const record = await Record.findById(id);

  res.status(200).send(record);
};

exports.deleteRecord = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um das record mit der id aus params aus der records-Collection zu löschen
  const record = await Record.findByIdAndDelete(id);

  res.status(200).send(record);
};

exports.updateRecord = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um das record mit der id aus params in der records-Collection mit den Daten aus req.body zu aktualisieren
  const record = await Record.findByIdAndUpdate(id,dt,{new:true});
  res.status(200).send(record);
};

exports.addRecord = async (req, res, next) => {
  const dt = req.body;
  // Schreib hier code um die Daten des neuen record aus req.body in der records-Collection zu speichern
  const record = new Record(dt);
  await record.save();
  res.status(200).send(record);
};
