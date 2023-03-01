const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const feedRoutes = require('./routes/feed_router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-type, Accept, Authorization'
  );
  next();
});

app.use('/feed', feedRoutes);


app.use((error, req, res, next) => {
  console.log('Erro capturado:', error);
  const status = error.statusCode || 500; 
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


const server = app.listen(process.env.PORT || 8080);
const io = require('./socket').init(server);
io.on('connection', socket => {
  console.log('Client connected');
})