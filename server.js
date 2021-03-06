'use strict';

console.log('Server.js is alive.');

// const { response } = require('express');
//REQUIRED
const express = require('express');
const cors = require('cors');

require('dotenv').config();

// let data = require('./data/data.json');

//USE
const app = express();  //instance of express called app

app.use(cors());

const PORT = process.env.PORT || 3002;

//ROUTES
app.get('/', (request, response) => {
  response.send('Hello from Express.');
});

app.get('/hello', (request, response) => {  // /hello ?key=value
  // console.log(request);  //huge amount of data  //query: { name: 'thing'}
  // console.log(request.query);
  // console.log(request.query.name);
  let name = request.query.name;
  response.send(`Hello ${name}.`);
});

app.get('*', (request, response) => {
  response.send('404: Nope.');
})


//ERRORS
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})


//LISTEN
app.listen(PORT, () => console.log(`Express is listening on ${PORT}`));  //called express to turn on server... needs port and callback.