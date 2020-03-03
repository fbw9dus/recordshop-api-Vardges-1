/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Pseudo-DB-Bibliothek importieren
// var { DataStore } = require('notarealdb')

// Track_router Importieren
var trackRouter = require("./routes/TrackGet")

/** INIT */
const app = express();

// Pseudo-DB erstellen
// var store = new DataStore('./data')

// Collection für Tiere
// var track = store.collection('track')



/** LOGGING */
app.use(logger('dev'));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/track", trackRouter)

/** STATIC FILES*/
// app.use(express.static(path.join(__dirname, 'public')));


// URL für Startseite festlegen
app.get('/', (req, res) => {
    res.send('<form method="DELETE" action="/track/1"><input type="text" name="type"><input type="submit" value="Senden"></form>')
})

// app.get('/track', (req, res) => {
//     res.json(track.list())

// })

/** ROUTES */
// app.use('/', indexRouter);
// app.use('/users', usersRouter);



// app.post('/track', (req, res) => {
//     var data = req.body
//     // Neues Tier in die DB hinzufügen
//     track.create(data)
//     // Alles aus der DB-Collection ausgeben
//     res.json(track.list())
// })

// app.delete('/animals/:animalId', (req, res) => {
//     var animalId = parseInt(req.params.animalId)
//     console.log("delete " + animalId)
    
//     // Einen Eintrag aus DB löschen
//     animals.delete(animalId)
//     res.json(animals.list())
// })

/** EXPORT PATH */
module.exports = app;
