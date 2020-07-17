var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations page. */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/view', ctrlLocations.addReview);

/* Other page */
router.get('/about', ctrlOthers.about);

module.exports = router;
