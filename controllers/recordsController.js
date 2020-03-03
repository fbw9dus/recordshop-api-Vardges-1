
// Pseudo-DB-Bibliothek importieren
var { DataStore } = require('notarealdb')
// Pseudo-DB erstellen
var store = new DataStore('./data')
// Collection für Shop-Artikel
var track = store.collection('track')

// Funktion um Liste der Artikel zurückzugeben
exports.getRecords = (req, res, next) => {
    res.status(200).send(track.list());
}

// Funktion um neuen Aretikel hinzuzufügen
exports.addRecord = (req, res, next) => {
    const data = req.body;
    track.create(data)
    res.status(200).send(data);
}






