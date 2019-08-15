
const express = require('express');
const router = express.Router();
const forceUser = require('../controllers/forceUsers');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addForceUser', function(req, res) {
    forceUser.create(req,res);
});

router.get('/getForceUser', function(req, res) {
    forceUser.list(req,res);
});

module.exports = router;