const Order   = require('../models/Order');

exports.getOrders = async (req, res, next) => {
  // Schreib hier code um alle Bestellungen aus der orders-Collection zu holen
  var order = await Order.find().populate('record')
  res.status(200).send(order);
};

exports.getOrder = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu holen
  const order    = await Order.findById(id).populate('record');
  res.status(200).send(order);
};

exports.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu löschen
  const order       =await Order.findByIdAndDelete(id);
  res.status(200).send(order);
};

exports.updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um die Bestellung mit der id aus params in der orders-Collection mit den Daten aus req.body zu aktualisieren
  const order       = await Order.findByIdAndUpdate(id,dt,{new:true});
  res.status(200).send(order);
};

exports.addOrder = async (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten der neuen Bestellungen aorderDataus req.body in der orders-Collection zu speichern
  const order = new Order(data);
  await order.save();
  res.status(200).send(order);
};
