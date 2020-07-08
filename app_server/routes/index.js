var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
