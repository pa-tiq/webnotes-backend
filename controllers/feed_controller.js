const fs = require('fs');
const path = require('path');

const io = require('../socket');

exports.getFeed = (req, res, next) => {};

exports.putFeed = (req, res, next) => {
  io.getIO().emit('feed',{ action: 'put', content: req.body.content });
};
