const mongoose = require('mongoose');

// Creating Mongoose Schema in MongoDB

const urlSchema = new mongoose.Schema({
  urlCode: String,
  urlShort: String,
  urlLong: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url',urlSchema);
