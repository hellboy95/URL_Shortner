const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  urlShort: String,
  urlLong: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url',urlSchema);
