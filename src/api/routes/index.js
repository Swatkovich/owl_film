var express = require('express');
var router = express.Router();

/* GET users listing. */

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res) {
  res.send('respond with a resource api')
});

router.get('/Form', function(req, res) {
  res.send('FORM HERE');
})

router.post('/Form', function(req, res) {
  console.log("req.body:" + req + res);
  console.log(req.body.surname);
  console.log(req.body.name);
  res.send(`${req.body.surname} - ${req.body.name}`);
  console.log(res.body);
})

module.exports = router;
