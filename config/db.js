const mongoose = require('mongoose');
const config = require('config');

// Getting the mongoDB URL global variable using config package

const db = config.get('mongoURI');

// Creating the mongoDB connection using the mongoose package

const connectDB = async () => {
  try {
      await mongoose.connect(db, {
        useNewUrlParser: true
        
      });

      console.log('MongoDB Atlas connected through Mongoose JS package');

  } catch (err) {
      console.error(err.message);
      process.exit(1);
  }
};


module.exports = connectDB;
