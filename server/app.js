const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require('cors')
require('dotenv').config();

const indexRouter = require('./routes/index');
const educationsRouter = require('./routes/educations');
const workexperienceRouter = require('./routes/workexperience');

const app = express();

const connection = require('./lib/conn.js');

connection.connect(function(err){
  if(err) throw err
  else console.log("Uppkopplad till databasen");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/portfolio', indexRouter);
app.use('/educations', educationsRouter);
app.use('/workexperience', workexperienceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
