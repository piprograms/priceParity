const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT;
const rapidAPIKey = process.env.RAPID_API_KEY;


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('hi');
});

app.get('/cities', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://cost-of-living-and-prices.p.rapidapi.com/cities',
    headers: {
      'x-rapidapi-key': rapidAPIKey,
      'x-rapidapi-host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
  };
  
  axios.request(options).then((response) => {
    res.json(response.data);
}).catch((error) => {
    console.error(error);
})
});

app.get('/prices', (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
      // params: {
      //   city_name: 'Bratislava',
      //   country_name: 'Slovakia'
      // },
      headers: {
        'x-rapidapi-key': rapidAPIKey,
        'x-rapidapi-host': 'cost-of-living-and-prices.p.rapidapi.com'
      }
    };
    
axios.request(options).then((response) => {
    res.json(response.data);
}).catch((error) => {
    console.error(error);
})
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});