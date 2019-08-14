const express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const db = require('./db');


const path = __dirname + '/public/';
const PORT = 8080;

router.use(function (req, res, next) {
    console.log('/', req.method);
    next;
})

router.get('/', function(req, res) {
    res.sendFile(path + 'index.html'); 
});

router.get('/', function(req, res) {
    res.sendFile(path + 'forceUsers.html');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });