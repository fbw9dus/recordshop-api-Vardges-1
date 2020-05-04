const Record   = require('../models/Record');
const createError = require('http-errors');



exports.getRecords = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Schreib hier code um das record mit der id aus params aus der records-Collection zu holen
    const record = Record.findById(id)
    if(!record) throw new createError.NotFound()
    res.status(200).send(record);
  } catch (error) {
    next(error)
  }
  
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
  // const record = new Record(dt);
  // await record.save();
  const record = Record.create(dt);
  res.status(200).send(record);
};
