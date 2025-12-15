var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var {expressjwt: jwt} = require("express-jwt");
const md5 = require("md5");

// the .env file in the project root directory is read
require("dotenv").config()
require("express-async-errors");
// connect database
require("./dao/db");



var userRouter = require('./routes/user');
var captchaRouter = require('./routes/captcha');

var app = express();

app.use(cors({
  origin: 'http://localhost:3002', // 允许的前端地址
  credentials: true,               // 如果要携带 cookie
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization']
}));

app.use(session({
  "secret": process.env.SESSION_SECRET,
  "resave": true,
  "saveUninitialized": true,
  "cookie": {
    "maxAge": 5 * 60 * 1000,
    "sameSite": 'lax', // 或 'none' 跨域
    "secure": false
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// validate token interface
app.use(jwt({
  secret: md5(process.env.JWT_SECRET),
  algorithms: ["HS256"]
}).unless({
  // the following routes that are not needed to be validated by token
  path: [
    {"url": "/api/captcha", methods: ["POST"]},
    {"url": "/api/user/login", methods: ["POST"]}
  ]
}))



app.use('/api/user', userRouter);
app.use('/api/captcha', captchaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.send(err);
});

module.exports = app;
