const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// locations 
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);

router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationUpdateOne)
  .delete(ctrlLocations.locationDeleteOne);

// reviews 
router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewReadOne)
  .put(ctrlReviews.reviewUpdateOne)
  .delete(ctrlLocations.reviewsDeleteOne);

  module.exports = router;