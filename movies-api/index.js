const express = require('express');

const app = express();

const {config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, errorHandler} = require('./utils/middleware/errorHandlers');

app.use(express.json())
moviesApi(app);

/* app.get('/', function (req, res) {
  res.send('Hello World!')
}); */

/* app.get('/bisiesto/:anio', function (req, res) {
  const year = req.params.anio;
  ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ?
  res.send(`El año ${year} es bisiesto`) :
  res.send(`El año ${year} NO es bisiesto`)
}); */

app.get('/json', function (req, res) {
  res.json('Hello Json!')
});

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
});

// sudo docker run -p 27017:27017 --name mongo_platzivideo -d mongo
// sudo docker exec -it mongo_platzivideo bash