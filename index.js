// Express code to egt express server instace up and call the AIP code
const express = require('express');
const path = require('path');

const connectDB = require('./config/db.js');


const app = express();

//Connect to MongoDB:
connectDB();

app.use(express.json({extended: false}));

// Defining routes:
//Route to Send path to HTML file
app.use('/index', function(req,res){
  res.sendFile(path.join(__dirname+'/HTML/index.html'));
});
//Route for /"Short URL Code"
app.use('/', require('./routes/index'));
//Route for Longer to shorter conversion
app.use('/api/url', require('./routes/url'));

const PORT=5000;


app.listen(PORT, () => console.log(`Express Server has started on ${PORT}`));
