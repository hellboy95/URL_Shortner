// Processing of the shortened urls is going to happen in the index.js

const express = require('express');
const router = express.Router();

console.log('Starting express - 1');
const Url = require('../model/Url');
// GET /:code - Sending only the URL and no request ( Why we are using GET method)
// @DESC Going to redirect the short code url to the respectice long codeurl in the db

router.get('/:code', async (req,res) => {
  //Check if the short code in the request is matching with any short code in the DB.
  try{
    const url = await Url.findOne({ urlCode: req.params.code })

    if(url){
      // See if return is required - test result: Not required
      return res.redirect(url.urlLong);
    }else {
      return res.status(401).json('Short Url not found');
    }
  }catch(err){
    console.log(err);
    res.statis(500).json('Server Down!');
  }
})
module.exports = router;
