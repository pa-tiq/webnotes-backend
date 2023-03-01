const express = require('express');

const feedController = require('../controllers/feed_controller');
const router = express.Router();

router.get('/feed', feedController.getFeed);
router.put('/feed', feedController.putFeed);
