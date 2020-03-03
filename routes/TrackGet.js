const express = require('express');
const router = express.Router();

// // Pseudo-DB-Bibliothek importieren
var { DataStore } = require('notarealdb')

// Pseudo-DB erstellen
var store = new DataStore('./data')

// Collection für Tiere
var track = store.collection('track')

router.get("/", (req, res) => {
    res.json(track.list())
})



// Get shprutmenq ira arandzin papki mech
router.post("/", (req, res) => {
    var data = req.body
    // Neues Tier in die DB hinzufügen
    track.create(data)
    // Alles aus der DB-Collection ausgeben
    res.json(track.list())
})

module.exports = router