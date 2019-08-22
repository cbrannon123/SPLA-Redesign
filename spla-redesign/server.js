const createError = require('http-errors');
const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const cors = require('cors');

require("dotenv").config();
require('./config/database');

//const apiRouter = require('./routes/api/api')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//app.use('/api', apiRouter);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on ${port}, better go catch it!`)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render error page
    res.status(err.static || 500);
    res.render('error');
});

module.exports = app;