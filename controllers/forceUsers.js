const path = require('path');
const forceUser = require('../models/forceUsers')

exports.index = function (req, res) {
    res.sendfile(path.resolve('public/'))
}

exports.create = function (req, res) {
    let newForceUser = new forceUser(req.body);
    console.log(req.body);
    newForceUser.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save force user to database!');
        } else {
            res.redirect('/forceUsers/getforceuser');
        }
    });
};

exports.list = function (req, res) {
    forceUser.find( {} ).exec(function (err, forceUsers) { 
        if(err){
            return res.send(500, err);
        } res.render('getforceuser', {
            forceUsers: forceUsers
        });
    });
};

