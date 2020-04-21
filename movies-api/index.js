const express = require('express');
const morgan = require('morgan');

const app = express();

const {config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, wrapErrors, errorHandler} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body-parser
app.use(express.json())
app.use(morgan('dev'));

// routes
moviesApi(app);

// capturar error 404
app.use(notFoundHandler);

app.get('/json', function (req, res) {
  res.json('Hello Json!')
});

// errors middelware
app
  .use(logErrors)
  .use(wrapErrors)
  .use(errorHandler)

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`)
});

// sudo docker run -p 27017:27017 --name mongo_platzivideo -d mongo
// sudo docker exec -it mongo_platzivideo bash