const express = require('express');
const router = express.Router();
const path = require('path');

router.use(function (req, res, next) {
  console.log('/', req.method);
  next();
})
// route for home page
router.get('/', function(req, res) {
  res.sendFile(path.join('views/index.html')); 
});
// // route for page where force users are added
// router.get('/force-users', function(req, res) {
//   res.sendFile(path.join('views/force-users.html')); 
// });
// // route for the displayed force users
// router.get('/get-force-users', function(req, res) {
//   res.sendFile(path.join('views/get-force-users.html')); 
// });


module.exports = router;