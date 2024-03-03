const express = require('express')
const app = express()
const port = 3002

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})

app.get('/searchRestaurant', (req, res) => {

  const sdk = require('api')('@yelp-developers/v1.0#ab2ihuolt8pvwud');

  sdk.auth('Bearer 22GD387m4MP1qpro4t9r5SbkIcq2-bgIviUVvwbyam8aT2tiuzvCyI8U7SBCyJ4b3z6a-_-iqSJECKXGtOZ240EhUk1nl9WBFry9Z1eKlPwCCSHlLbHUysly7qXiZXYx');
  sdk.v3_business_search({sort_by: 'best_match', latitude:'47.6238799', longitude:'-122.1328896'})
  .then(({ data }) => res.json(data))
  .catch(err => console.error(err));

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})