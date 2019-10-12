// url.js is used to create the post and the shortened urls and add them to the db.
// Processing of the shortened urls is going to happen in the index.js


const express = require('express');
const router = express.Router();
const validurl= require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../model/Url');

// @ Route POST /api/url/shorten
// @ DESC  Create the short URL for the long URL passed through the POST request body.

router.post('/shorten', async (req,res) => {
  const { urlLong } = req.body;
  const baseURL = config.get('baseURL');

  //Check if the baseUrl (localhost) is valid or not
  if(!validurl.isUri(baseURL)){
    return res.status(401).json('URL not found');
  }

  // Create the appending short url code
  const urlCode = shortid.generate();

  //Check if the original long url is valid
  if(validurl.isUri(urlLong)){
    //Check if the longURL is already present in the DB
    try {
      let url = await Url.findOne({ urlLong });
      //If it is, return the existing data
      if(url){
        res.json(url);
      }else {
      //Else, Create the short URL and add it to the DB ,save and return it.
        const urlShort = baseURL + '/' + urlCode;

        url = new Url({
          urlLong,
          urlShort,
          urlCode,
          date: new Date()
        });

        await url.save();

        res.json(url);

      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server down');

    }

  }else {
    //If the Long URL is not valid
    // See if return is required
    return res.status(401).json('Long URL not found');
    }
})
module.exports = router;
