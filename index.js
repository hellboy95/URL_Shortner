const express = require('express');

console.log('beofre');
const connectDB = require('./config/db.js');
console.log('after');

const app = express();

//Connect to MongoDB

connectDB();

app.use(express.json({extended: false}));

const PORT=5000;

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
