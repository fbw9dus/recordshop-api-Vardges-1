/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/** ROUTERS */
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');

// Track_router Importieren
var trackRouter = require("./routes/records")

/** INIT */
const app = express();

/** LOGGING */
app.use(logger('dev'));


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** STATIC FILES*/
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Requested-With, Content-Type, Accept"
    )
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next()
    
})


/** ROUTES */

app.use('/users', usersRouter);
app.use('/track', recordsRouter);

/** EXPORT PATH */
module.exports = app;
