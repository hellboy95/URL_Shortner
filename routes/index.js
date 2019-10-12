// Processing of the shortened urls is going to happen in the index.js

const express = require('express');
const router = express.Router();

// GET /:code - Sending only the URL and no request ( Why we are using GET method)
// @DESC Going to redirect the short code url to the respectice long codeurl in the db
module.exports = router;
