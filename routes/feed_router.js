const express = require('express');

const feedController = require('../controllers/feed_controller');
const router = express.Router();

router.get('/', feedController.getFeed);
router.put('/', feedController.putFeed);

module.exports = router;
