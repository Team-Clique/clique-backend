// a type of import
const express = require('express')
// a type of import
var http = require('http') 
const app = express()


const server = http.createServer(app); //to create server for Heroku
// for CORS error
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
// 

// main part of the app
app.get('/searchRestaurant', (req, res) => {

  const sdk = require('api')('@yelp-developers/v1.0#ab2ihuolt8pvwud');

  sdk.auth('Bearer 22GD387m4MP1qpro4t9r5SbkIcq2-bgIviUVvwbyam8aT2tiuzvCyI8U7SBCyJ4b3z6a-_-iqSJECKXGtOZ240EhUk1nl9WBFry9Z1eKlPwCCSHlLbHUysly7qXiZXYx');// API key
  sdk.v3_business_search({categories: req.query.categories, sort_by: 'best_match', latitude:'47.6238799', longitude:'-122.1328896'}) // metadata of Yelp API
  .then(({ data }) => res.json(data))
  .catch(err => console.error(err));

  
})
//

// create port for the app
const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = app;