const express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const db = require('./db');
const forceUser = require('./routes/forceUsers')
const htmlRoutes = require('./routes/html')


const path = __dirname + '/views/';
const PORT = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

// app.use('/', router);
app.use('./routes/html', htmlRoutes)
app.use('/', forceUser)

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });