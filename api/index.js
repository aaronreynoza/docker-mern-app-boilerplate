// Express app setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const example = require('./src/routes/example');

// Mongoose client setup
function connectToMongoose() {
  mongoose
    .connect(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017/${process.env.MONGO_DATABASE}`,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log('MongoDB Connected');
      initRoutes();
    })
    .catch(err => setTimeout(() => {
      console.log('error connecting... received error: ');
      console.error(err);
      console.log('trying again...');
      connectToMongoose();
    }, 5000));
}

function initRoutes() {
  app.use('/example', example);

  app.listen(5000, () => console.log('Listening on port 5000'));
}

setTimeout(connectToMongoose, 15000);