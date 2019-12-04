var createError    = require('http-errors');
var express        = require('express');
var path           = require('path');
var cookieParser   = require('cookie-parser');
// express-session (it is for keeping the ID in a coockie so
// they can stay logedin) passport uses the express-session
var session        = require('express-session');
const multer = require('multer');
// passport uses express-session 
 //to keep track of the logedin user
var passport       = require('passport');

var logger         = require('morgan');

var methodOverride = require('method-override');
var middleware = require('middleware');
var indexRouter    = require('./routes/index');
var profileRouter  = require('./routes/profile');
var globalRouter   = require('./routes/global');
var usersRouter    = require('./routes/users');
var postRouter  = require('./routes/post');

var app = express();

//this will connect to the .env file, and will provide access to it
require('dotenv').config();

require('./config/database');
require('./config/passport');
require('./config/cloudinary');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// using express-session
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
 // app.use(session({... code above
 app.use(passport.initialize());
 app.use(passport.session());
 app.use('/', indexRouter);
 app.use('/', profileRouter);
 app.use('/', globalRouter);
 app.use('/users', usersRouter);
 app.use('/' , postRouter);

 

app.use(express.static(path.join(__dirname, 'public')));


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
